import { useNavigate } from 'react-router-dom';
import {
  Accessibility,
  ArrowLeft,
  BadgeCheck,
  Building2,
  CircleParking,
  HeartPulse,
  MapPin,
  Recycle,
  TicketCheck,
  Toilet,
  Utensils,
} from 'lucide-react';
import './FasilitasPasar.css';

const facilities = [
  { title: 'Toilet Bersih', description: 'Terpisah pria/wanita & ramah difabel', icon: Toilet, tone: 'pink' },
  { title: 'Mushola', description: 'Terletak di Lt. 2, mukena & karpet bersih', icon: Building2, tone: 'green' },
  { title: 'Parkir', description: 'Area motor & mobil dengan penjagaan resmi', icon: CircleParking, tone: 'green' },
  { title: 'Foodcourt Legenda', description: 'Kue lumpur, serabi, bakpao kentang', icon: Utensils, tone: 'pink' },
  { title: 'Laktasi & Pos Medis', description: 'Ruang ibu menyusui & P3K terpadu', icon: HeartPulse, tone: 'pink' },
  { title: 'Aksesibilitas Difabel', description: 'Jalur ramah kursi roda & pegangan tangan', icon: Accessibility, tone: 'green' },
  { title: 'Pojok Daur Ulang & Kompos', description: 'Pengelolaan sampah organik pasar', icon: Recycle, tone: 'green' },
];

const navigationItems = [
  { label: 'Home', path: '/home', icon: '/assets/dfd0c.svg' },
  { label: 'Toko', path: '/toko', icon: '/assets/2781e.svg' },
  { label: 'Promo', path: '/promo', icon: '/assets/75326.svg' },
  { label: 'Review Pasar', path: '/review-pasar', icon: '/assets/3de6e.svg' },
];

export default function FasilitasPasar() {
  const navigate = useNavigate();

  // Top bar
  return (
    <div className="facilities-page">
      <header className="facilities-topbar">
        <button className="facilities-back-button" type="button" aria-label="Kembali" onClick={() => navigate(-1)}>
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="facilities-topbar-title">
          <h1>Fasilitas Pasar</h1>
          <p><MapPin aria-hidden="true" />Pasar Oro-Oro Dowo, Malang</p>
        </div>
        <span className="facilities-topbar-spacer" aria-hidden="true" />
      </header>

      <main className="facilities-content">
        {/* Heritage and service highlights */}
        <section className="facilities-hero" aria-labelledby="facilities-hero-title">
          <span className="facilities-heritage-badge">Cagar Budaya SNI</span>
          <h2 id="facilities-hero-title">Kenyamanan Berbelanja Modern</h2>
          <p className="facilities-hero-description">Standar kebersihan prima berpadu nuansa arsitektur kolonial cagar budaya sejak 1932. Terbuka, ramah, dan inklusif untuk seluruh warga.</p>
          <div className="facilities-hero-stats" aria-label="Keunggulan pasar">
            <div className="facilities-stat-item"><strong>12+ Sarana</strong><span>Lengkap &amp;<br />terawat</span></div>
            <div className="facilities-stat-item"><strong>100% Inklusif</strong><span>Ramah<br />disabilitas</span></div>
            <div className="facilities-stat-item"><strong>Higienis</strong><span>Sanitasi<br />tiap hari</span></div>
          </div>
        </section>

        {/* Facilities grid */}
        <section className="facilities-card" aria-labelledby="facilities-section-title">
          <div className="facilities-section-heading">
            <span className="facilities-heading-icon"><Building2 aria-hidden="true" /></span>
            <div className="facilities-heading-copy">
              <h2 id="facilities-section-title">Fasilitas &amp; Parkir</h2>
              <p>Kenyamanan &amp; sarana pendukung pasar</p>
            </div>
            <span className="facilities-count">7 Fasilitas</span>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <article className="facilities-item" key={facility.title}>
                  <span className={`facilities-item-icon facilities-icon-${facility.tone}`}><Icon aria-hidden="true" /></span>
                  <div><h3>{facility.title}</h3><p>{facility.description}</p></div>
                </article>
              );
            })}
          </div>

          <div className="facilities-parking-banner">
            <span className="facilities-parking-icon"><TicketCheck aria-hidden="true" /></span>
            <div><h3>Tarif Parkir Resmi Pemkot</h3><p>Motor Rp 2.000 <span aria-hidden="true">•</span> Mobil Rp 3.000</p></div>
          </div>
        </section>

        {/* Market certification */}
        <aside className="facilities-certification-banner">
          <span className="facilities-certification-icon"><BadgeCheck aria-hidden="true" /></span>
          <p>Pasar terakreditasi SNI Pasar Rakyat dengan kebersihan lorong &amp; sirkulasi udara optimal.</p>
        </aside>
      </main>

      {/* Fixed bottom navigation */}
      <nav className="bottom-nav" aria-label="Navigasi utama">
        {navigationItems.map((item) => {
          const isActive = item.label === 'Home';
          return (
            <button
              className={`${isActive ? 'active ' : ''}${item.label === 'Review Pasar' ? 'review-tab' : ''}`}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              key={item.label}
              onClick={() => navigate(item.path)}
            >
              <span><img src={item.icon} alt="" /></span><b>{item.label}</b>
            </button>
          );
        })}
      </nav>
    </div>
  );
}