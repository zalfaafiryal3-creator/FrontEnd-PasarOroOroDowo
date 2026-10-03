import { useEffect, useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getStoreDetails,
  type ProductItem,
  type StoreDetail,
} from '../../../../backend/src/clients/storeDetailsApi';
import './ChatbotRekomendasi.css';

type Duration = '30 Menit' | '1 Jam' | '2 Jam +';
type Taste = 'Manis' | 'Pedas' | 'Asin' | 'Gurih';

interface RouteStop {
  store: StoreDetail;
  product: ProductItem;
  price: number;
}

interface RoutePlan {
  duration: Duration;
  taste: Taste;
  budget: number;
  stops: RouteStop[];
  total: number;
}

const durations: Duration[] = ['30 Menit', '1 Jam', '2 Jam +'];
const tastes: Taste[] = ['Manis', 'Pedas', 'Asin', 'Gurih'];
const tasteKeywords: Record<Taste, RegExp> = {
  Manis: /manis|gula|klepon|kismis/i,
  Pedas: /pedas/i,
  Asin: /asin/i,
  Gurih: /gurih|renyah/i,
};
const durationStops: Record<Duration, number> = {
  '30 Menit': 2,
  '1 Jam': 3,
  '2 Jam +': 5,
};

function parsePrice(price: string): number {
  const amount = Number(price.replace(/\D/g, ''));
  return Number.isFinite(amount) ? amount : 0;
}

function formatRupiah(amount: number): string {
  return `Rp${new Intl.NumberFormat('id-ID').format(amount)}`;
}

function getTasteKeywords(taste: Taste): string {
  return taste.toLowerCase();
}

function createRoutePlan(
  storeDetails: Record<string, StoreDetail>,
  duration: Duration,
  taste: Taste,
  budget: number,
): RoutePlan {
  const candidates = Object.values(storeDetails)
    .filter((store) => store.category === 'Makanan' || store.category === 'Kuliner Legendaris')
    .flatMap((store) => store.products.map((product) => ({ store, product, price: parsePrice(product.price) })))
    .filter(({ product, price }) => price > 0 && tasteKeywords[taste].test(`${product.name} ${product.desc}`))
    .sort((first, second) => first.price - second.price);

  const stops: RouteStop[] = [];
  let total = 0;

  for (const candidate of candidates) {
    if (stops.length >= durationStops[duration]) break;
    if (total + candidate.price > budget) continue;
    stops.push(candidate);
    total += candidate.price;
  }

  return { duration, taste, budget, stops, total };
}

function routeTitle(plan: RoutePlan): string {
  const routeType = plan.duration === '2 Jam +' ? 'Rute kuliner' : 'Rute singkat';
  const durationLabel = plan.duration === '2 Jam +' ? '2 jam+' : plan.duration.toLowerCase();
  return `${routeType} ${durationLabel}, ${getTasteKeywords(plan.taste)} & hemat`;
}

export default function ChatbotRekomendasi() {
  const navigate = useNavigate();
  const location = useLocation();
  const [duration, setDuration] = useState<Duration>('1 Jam');
  const [taste, setTaste] = useState<Taste>('Pedas');
  const [budget, setBudget] = useState(100_000);
  const [storeDetails, setStoreDetails] = useState<Record<string, StoreDetail>>({});
  const [storeDetailsError, setStoreDetailsError] = useState('');
  const [routePlan, setRoutePlan] = useState(() => createRoutePlan({}, '1 Jam', 'Pedas', 100_000));

  useEffect(() => {
    let active = true;
    getStoreDetails()
      .then((details) => {
        if (active) {
          setStoreDetails(details);
          setRoutePlan(createRoutePlan(details, '1 Jam', 'Pedas', 100_000));
        }
      })
      .catch((error: unknown) => {
        if (active) {
          setStoreDetailsError(error instanceof Error ? error.message : 'Gagal memuat data toko.');
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const handleBack = () => {
    if (location.key === 'default') {
      navigate('/home');
      return;
    }
    navigate(-1);
  };

  const generateRoute = () => setRoutePlan(createRoutePlan(storeDetails, duration, taste, budget));

  return (
    <main className="chatbot-page">
      <header className="chatbot-header">
        <button type="button" className="chatbot-back" onClick={handleBack} aria-label="Kembali">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="chatbot-header-content">
          <img src="/assets/robot.png" alt="" />
          <div>
            <h1>AI Perencana Kunjungan</h1>
            <p>Susun rute kuliner otomatis sesuai preferensimu</p>
          </div>
        </div>
        <span aria-hidden="true" />
      </header>

      <div className="chatbot-content">
        <section className="chatbot-controls" aria-label="Preferensi rute">
          <fieldset className="chatbot-option-section">
            <legend>Waktu Tersedia</legend>
            <div className="chatbot-pills chatbot-duration-pills">
              {durations.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`chatbot-pill ${duration === option ? 'selected' : ''}`}
                  aria-pressed={duration === option}
                  onClick={() => setDuration(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="chatbot-option-section">
            <legend>Preferensi Rasa</legend>
            <div className="chatbot-pills chatbot-taste-pills">
              {tastes.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`chatbot-pill ${taste === option ? 'selected' : ''}`}
                  aria-pressed={taste === option}
                  onClick={() => setTaste(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="chatbot-budget">
            <div className="chatbot-budget-label">
              <label htmlFor="chatbot-budget-slider">Budget</label>
              <strong>{formatRupiah(budget)}</strong>
            </div>
            <input
              id="chatbot-budget-slider"
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              style={{ '--budget-progress': `${((budget - 10000) / 190000) * 100}%` } as React.CSSProperties}
            />
            <div className="chatbot-budget-range"><span>Rp10.000</span><span>Rp200.000</span></div>
          </div>
        </section>

        <button type="button" className="chatbot-generate" onClick={generateRoute}>
          <Sparkles aria-hidden="true" />
          Buat Rekomendasi
        </button>
        {storeDetailsError && <p role="alert">{storeDetailsError}</p>}

        <section className="chatbot-result" aria-live="polite" aria-labelledby="chatbot-result-title">
          <div className="chatbot-result-badge"><img src="/assets/robot.png" alt="" />HASIL AI</div>
          <h2 id="chatbot-result-title">{routeTitle(routePlan)}</h2>
          <p className="chatbot-result-summary">
            {routePlan.stops.length > 0
              ? `${routePlan.stops.length} pilihan kuliner · Estimasi ${formatRupiah(routePlan.total)}`
              : `Belum ada produk ${routePlan.taste.toLowerCase()} yang sesuai budget ${formatRupiah(routePlan.budget)}.`}
          </p>
          {routePlan.stops.length > 0 ? (
            <ol className="chatbot-route-list">
              {routePlan.stops.map(({ store, product }, index) => (
                <li className="chatbot-route-stop" key={`${store.id}-${product.id}`}>
                  <span className="chatbot-stop-number">{index + 1}</span>
                  <div className="chatbot-stop-copy">
                    <h3>{product.name}</h3>
                    <p>{store.name} · {product.desc}</p>
                    <strong>{product.price}{product.unit}</strong>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="chatbot-empty-result">Coba naikkan budget atau pilih preferensi rasa lainnya.</p>
          )}
        </section>
      </div>
    </main>
  );
}
