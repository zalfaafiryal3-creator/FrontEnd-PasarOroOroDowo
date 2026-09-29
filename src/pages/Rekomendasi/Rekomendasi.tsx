import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, SlidersHorizontal, Star } from 'lucide-react';
import './Rekomendasi.css';

const recommendedStores = [
  {
    name: 'Lumpur Kentang 27',
    category: 'Kuliner Legend',
    address: 'Blok B No. 12',
    rating: '4.8',
    image: '/assets/lumpur%20kentang%2027.jpeg',
  },
  {
    name: 'Pangsit Mie Arema',
    category: 'Makanan',
    address: 'Teras Timur No. 04',
    rating: '4.8',
    image: '/assets/pangsit%20mie%20arema.png',
  },
];

const recommendations = [
  {
    badge: 'WAJIB COBA',
    name: 'Kue Lumpur 27',
    description: 'Resep otentik kentang lumper',
    price: 'Rp 7.000',
    unit: '/pcs',
    rating: '4.9 (420+)',
    image: '/assets/kue%20lumpur%2027.jpeg',
    tone: 'pink',
  },
  {
    badge: 'PRODUK LOKAL FAVORIT',
    name: 'Bangkit Bakso Goreng Ayam',
    description: 'Rasanya enak',
    price: 'Rp 7.000',
    unit: '/pcs',
    rating: '4.9 (1.2k)',
    image: '/assets/bangkit%20bakso%20goreng.jpeg',
    tone: 'green',
  },
  {
    badge: 'PILIHAN PENGUNJUNG',
    name: 'Klepon-ku',
    description: 'Rasanya enak',
    price: 'Rp 15.000',
    unit: '/10 biji',
    rating: '4.8 (850+)',
    image: '/assets/klepon.png',
    tone: 'yellow',
  },
];

const selectedProducts = [
  { id: 'tempe', store: 'Lapak Tempe Bu Siti', name: 'Tempe Segar Daun...', price: 'Rp 4.500', unit: 'per papan', rating: '4.9', image: '/assets/tempe%20segar.jpg' },
  { id: 'lumpur', store: 'Kue Lumpur 27', name: 'Kue Lumpur', price: 'Rp 7.000', unit: '/pcs', rating: '4.9', image: '/assets/kue%20lumpur%2027.jpeg' },
  { id: 'keripik', store: 'Oleh-Oleh Khas Dowo', name: 'Keripik Tempe Renyah', price: 'Rp 15.000', unit: 'isi 200gr', rating: '4.8', image: '/assets/kripik%20tempe.jpg' },
  { id: 'bakso', store: 'Toko Beras Barokah', name: 'Bangkit Bakso Goreng Ay...', price: 'Rp 7.000', unit: '/pcs', rating: '4.9', image: '/assets/bangkit%20bakso%20goreng.jpeg' },
  { id: 'klepon', store: 'Klepon-ku', name: 'Klepon Original', price: 'Rp 15.000', unit: '/10 biji', rating: '4.8', image: '/assets/klepon.png' },
  { id: 'jajanan', store: 'Kios Bu Lilik', name: 'Jajanan Pasar Tampah', price: 'Rp 25.000', unit: 'porsi tampah mini', rating: '5.0', image: '/assets/jajanan%20pasar.jpg' },
];

const navigationItems = [
  { label: 'Home', path: '/home', icon: '/assets/dfd0c.svg' },
  { label: 'Toko', path: '/toko', icon: '/assets/2781e.svg' },
  { label: 'Promo', path: '/promo', icon: '/assets/75326.svg' },
  { label: 'Review Pasar', path: '/review-pasar', icon: '/assets/3de6e.svg' },
];

export default function Rekomendasi() {
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState<string[]>([]);
  const [sortByRating, setSortByRating] = useState(false);

  const products = sortByRating
    ? [...selectedProducts].sort((first, second) => Number(second.rating) - Number(first.rating))
    : selectedProducts;

  const toggleSavedProduct = (productId: string) => {
    setSavedProducts((current) => current.includes(productId)
      ? current.filter((savedId) => savedId !== productId)
      : [...current, productId]);
  };

  return (
    <div className="rekomendasi-page">
      {/* Page header */}
      <header className="rekomendasi-header">
        <button className="rekomendasi-back-button" type="button" aria-label="Kembali" onClick={() => navigate(-1)}>
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="rekomendasi-header-copy">
          <h1>Rekomendasi</h1>
          <p>Pilihan toko dan produk yang menarik untuk kamu</p>
        </div>
        <span className="rekomendasi-header-spacer" aria-hidden="true" />
      </header>

      <main className="rekomendasi-content">
        {/* Recommended shops */}
        <section className="rekomendasi-section" aria-labelledby="recommended-stores-title">
          <div className="rekomendasi-section-heading">
            <h2 id="recommended-stores-title">Toko Rekomendasi</h2>
            <button type="button" onClick={() => navigate('/toko')}>Lihat Semua</button>
          </div>
          <div className="rekomendasi-store-scroll">
            {recommendedStores.map((store) => (
              <article className="rekomendasi-store-card" key={store.name}>
                <div className="rekomendasi-store-image-wrap">
                  <img src={store.image} alt={store.name} />
                  <span className="rekomendasi-open-badge"><i />Buka</span>
                  <span className="rekomendasi-image-rating"><Star aria-hidden="true" />{store.rating}</span>
                </div>
                <div className="rekomendasi-store-details">
                  <h3>{store.name}</h3>
                  <p>{store.category}</p>
                  <div className="rekomendasi-store-footer">
                    <span>{store.address}</span>
                    <button type="button" onClick={() => navigate('/toko')}>Lihat Toko <span aria-hidden="true">›</span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Curated product recommendations */}
        <section className="rekomendasi-section" aria-labelledby="recommendations-title">
          <div className="rekomendasi-section-heading">
            <h2 id="recommendations-title">Rekomendasi Untuk Kamu</h2>
            <span className="rekomendasi-section-note">Kurasi Pilihan</span>
          </div>
          <div className="rekomendasi-list">
            {recommendations.map((item) => (
              <article className="rekomendasi-item-card" key={item.name}>
                <img className="rekomendasi-item-image" src={item.image} alt={item.name} />
                <div className="rekomendasi-item-copy">
                  <span className={`rekomendasi-item-badge ${item.tone}`}>{item.badge}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="rekomendasi-item-price"><strong>{item.price}</strong><span>{item.unit}</span></div>
                </div>
                <span className="rekomendasi-item-rating"><Star aria-hidden="true" />{item.rating}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Two-column selected products */}
        <section className="rekomendasi-section rekomendasi-products-section" aria-labelledby="selected-products-title">
          <div className="rekomendasi-section-heading">
            <h2 id="selected-products-title">Produk Pilihan</h2>
            <button
              className="rekomendasi-sort-button"
              type="button"
              aria-label={sortByRating ? 'Urutkan produk terlaris' : 'Urutkan berdasarkan rating'}
              onClick={() => setSortByRating((current) => !current)}
            >
              {sortByRating ? 'Rating' : 'Terlaris'} <SlidersHorizontal aria-hidden="true" />
            </button>
          </div>
          <div className="rekomendasi-product-grid">
            {products.map((product) => {
              const isSaved = savedProducts.includes(product.id);
              return (
                <article className="rekomendasi-product-card" key={product.id}>
                  <div className="rekomendasi-product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <button
                      type="button"
                      className={`rekomendasi-bookmark${isSaved ? ' saved' : ''}`}
                      aria-label={isSaved ? `Hapus ${product.name} dari favorit` : `Simpan ${product.name} ke favorit`}
                      aria-pressed={isSaved}
                      onClick={() => toggleSavedProduct(product.id)}
                    >
                      <Bookmark aria-hidden="true" />
                    </button>
                    <span className="rekomendasi-product-rating"><Star aria-hidden="true" />{product.rating}</span>
                  </div>
                  <div className="rekomendasi-product-details">
                    <p className="rekomendasi-product-store">{product.store}</p>
                    <h3>{product.name}</h3>
                    <div className="rekomendasi-product-price"><strong>{product.price}</strong><span>{product.unit}</span></div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Persistent main navigation */}
      <nav className="rekomendasi-bottom-navigation" aria-label="Navigasi utama">
        {navigationItems.map((item, index) => (
          <button
            className={`rekomendasi-nav-item${index === 0 ? ' active' : ''}${index === 3 ? ' review-tab' : ''}`}
            type="button"
            key={item.label}
            aria-current={index === 0 ? 'page' : undefined}
            onClick={() => navigate(item.path)}
          >
            <span><img src={item.icon} alt="" /></span>
            <b>{item.label}</b>
          </button>
        ))}
      </nav>
    </div>
  );
}