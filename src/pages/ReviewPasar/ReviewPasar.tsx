import { useNavigate } from 'react-router-dom';
import './ReviewPasar.css';

const asset = (name: string) => `/assets/${name}`;

const filters = [
  'Semua (3)',
  'Dengan Foto (1)',
  'Bintang 5 (2)',
  'Bintang 4 (1)',
  'Bintang 1-3 (0)',
];

const shopSummary = [
  { label: 'Kebersihan & Kerapian', value: 4.9, tone: 'green' },
  { label: 'Kelengkapan Komoditas', value: 4.8, tone: 'pink' },
  { label: 'Keramahan Pedagang', value: 4.9, tone: 'rose' },
  { label: 'Keamanan & Parkir', value: 4.6, tone: 'brown' },
];

const reviews = [
  {
    name: 'ZALFAA',
    status: 'Pengunjung Setia',
    rating: 5,
    date: 'Kemarin',
    tags: ['Kebersihan: Luar Biasa', 'Parkir: Tertata'],
    text:
      'Pasar tradisional paling bersih dan estetik di Malang! Lorongnya luas, tidak becek sama sekali, dan belanja sayur segar sampai jajanan di sini nyaman banget. Pedagangnya juga ramah-ramah.',
    photos: ['1', '2'],
    helpful: 34,
  },
  {
    name: 'Rani',
    status: 'Pengunjung Setia',
    rating: 5,
    date: '3 hari lalu',
    tags: [],
    text:
      'Sekarang makin modern, sudah banyak kios yang terima pembayaran QRIS. Kuliner legendaris di bagian belakang juga lengkap dan enak. Wajib cobain kue lumpur dan mie ayamnya!',
    photos: [],
    helpful: 19,
  },
  {
    name: 'Siti Rahmawati',
    status: 'Pengunjung Setia',
    rating: 4,
    date: '1 minggu lalu',
    tags: [],
    text:
      'Tempatnya asri dan bersih. Parkir motor dan mobil tertata rapi. Kalau pagi hari sekitar jam 7-8 cukup ramai tapi arus belanjanya tetap teratur karena lorongnya satu arah.',
    photos: [],
    helpful: 11,
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="star-row" aria-label={`${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < Math.round(rating) ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewToko() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <main className="mobile-page">
        <header className="top-header">
          <div className="brand-row">
            <div className="brand-logo">
              <img src={asset('c03df.svg')} alt="" />
            </div>
            <h1>Pasar Oro-Oro Dowo</h1>
          </div>

          <label className="search-box" aria-label="Cari review pasar">
            <img src={asset('14528.svg')} alt="" />
            <input
              type="search"
              placeholder="Cari review pasar..."
              aria-label="Cari review pasar"
            />
          </label>
        </header>

        <div className="page-content">
          <section className="market-summary-card">
          <div className="market-summary-head">
            <div className="market-summary-copy">
              <span className="market-badge">Pasar Wisata Cagar Budaya</span>
              <h1>Pasar Oro-Oro Dowo</h1>
              <div className="market-location">
                <span aria-hidden="true">📍</span>
                <span>Klojen, Kota Malang, Jawa Timur</span>
              </div>
            </div>
            <div className="market-thumb" aria-label="Foto pasar" />
          </div>

          <div className="rating-highlight">
            <div className="rating-score-box">
              <div className="score-value">4.8</div>
              <StarRow rating={5} />
            </div>

            <div className="rating-description">
              <strong>Sangat Direkomendasikan</strong>
              <span>Dari 1.240+ ulasan terverifikasi</span>
              <em>98% pengunjung puas</em>
            </div>
          </div>

          <div className="summary-bars">
            {shopSummary.map((item) => (
              <div className="summary-bar-item" key={item.label}>
                <div className="summary-bar-top">
                  <span className="summary-label">{item.label}</span>
                  <span className="summary-value">
                    {item.value} <span aria-hidden="true">★</span>
                  </span>
                </div>
                <div className="summary-track">
                  <div
                    className={`summary-fill ${item.tone}`}
                    style={{ width: `${(item.value / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="write-review-button">
            <span aria-hidden="true">✎</span>
            <span>Tulis Ulasan Pasar</span>
          </button>
        </section>

        <div className="community-banner">
          <div className="community-icon" aria-hidden="true">
            ✨
          </div>
          <div className="community-copy">
            <strong>Ulasan Anda Menghidupkan UMKM</strong>
            <span>
              Ulasan jujur membantu menjaga kebersihan dan mengangkat 251+ lapak pasar kita.
            </span>
          </div>
        </div>

        <section className="review-section">
          <div className="reviews-header">
            <h2>Semua Ulasan</h2>
            <button type="button" className="sort-button">
              Urutkan: Terbaru
            </button>
          </div>

          <div className="filter-scroll" aria-label="Filter kategori ulasan">
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter}
                className={`filter-chip ${index === 0 ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="review-list">
            {reviews.map((review) => (
              <article className="review-card" key={`${review.name}-${review.date}`}>
                <div className="review-card-head">
                  <div className="user-meta">
                    <strong>{review.name}</strong>
                    <span className="user-status">{review.status}</span>
                  </div>
                  <button type="button" className="menu-button" aria-label="Opsi lain">
                    ⋮
                  </button>
                </div>

                <div className="rating-row">
                  <div className="rating-inline">
                    <StarRow rating={review.rating} />
                    <span className="rating-value">{review.rating.toFixed(1)}</span>
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>

                {review.tags.length > 0 && (
                  <div className="review-tags">
                    {review.tags.map((tag) => (
                      <span key={tag} className="review-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="review-text">{review.text}</p>

                {review.photos.length > 0 && (
                  <div className="photo-grid">
                    {review.photos.map((photo, index) => (
                      <div key={`${photo}-${index}`} className="photo-frame">
                        <div className="photo-image" aria-label="Foto review" />
                        {index === review.photos.length - 1 && review.photos.length > 1 ? (
                          <span className="photo-overlay">+ Foto Lapak</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}

                <button type="button" className="helpful-button">
                  <span aria-hidden="true">👍</span>
                  <span>Membantu ({review.helpful})</span>
                </button>
              </article>
            ))}
          </div>

          <div className="load-more-wrapper">
            <button type="button" className="load-more-button">
              <span>Muat Ulasan Lainnya</span>
              <svg className="chevron-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5.5 7.75L10 12.25L14.5 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
        </div>

        <nav className="bottom-nav review-page" aria-label="Navigasi utama">
          <button type="button" onClick={() => navigate('/')}>
            <span><img src={asset('dfd0c.svg')} alt="" /></span>
            <b>Home</b>
          </button>
          <button type="button" onClick={() => navigate('/toko')}>
            <span><img src={asset('2781e.svg')} alt="" /></span>
            <b>Toko</b>
          </button>
          <button type="button" onClick={() => navigate('/promo')}>
            <span><img src={asset('75326.svg')} alt="" /></span>
            <b>Promo</b>
          </button>
          <button type="button" className="active review-tab" onClick={() => navigate('/review-pasar')}>
            <span aria-hidden="true">
              <svg className="nav-review-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96672 12H8.76255L13.3459 7.41667C13.4834 7.27917 13.5865 7.12257 13.6553 6.94688C13.724 6.77118 13.7584 6.59931 13.7584 6.43125C13.7584 6.26319 13.7202 6.09896 13.6438 5.93854C13.5674 5.77813 13.4681 5.62917 13.3459 5.49167L12.5209 4.62083C12.3834 4.48333 12.2306 4.38021 12.0625 4.31146C11.8945 4.24271 11.7188 4.20833 11.5355 4.20833C11.3674 4.20833 11.1955 4.24271 11.0198 4.31146C10.8441 4.38021 10.6875 4.48333 10.55 4.62083L5.96672 9.20417V12V12M12.3834 6.43125V6.43125L11.5355 5.58333V5.58333L12.3834 6.43125V6.43125M7.34172 10.625V9.75417L9.6563 7.43958L10.1146 7.85208L10.5271 8.31042L8.21255 10.625H7.34172V10.625M10.1146 7.85208L10.5271 8.31042V8.31042L9.6563 7.43958V7.43958L10.1146 7.85208V7.85208M10.7105 12H16.9667V10.1667H12.5438L10.7105 12V12M2.30005 19.3333V2.83333C2.30005 2.32917 2.47956 1.89757 2.83859 1.53854C3.19762 1.17951 3.62922 1 4.13338 1H18.8C19.3042 1 19.7358 1.17951 20.0948 1.53854C20.4539 1.89757 20.6334 2.32917 20.6334 2.83333V13.8333C20.6334 14.3375 20.4539 14.7691 20.0948 15.1281C19.7358 15.4872 19.3042 15.6667 18.8 15.6667H5.96672L2.30005 19.3333V19.3333M5.18755 13.8333H18.8V13.8333V13.8333V2.83333V2.83333V2.83333H4.13338V2.83333V2.83333V14.8646L5.18755 13.8333V13.8333M4.13338 13.8333V13.8333V2.83333V2.83333V2.83333V2.83333V2.83333V2.83333V13.8333V13.8333V13.8333V13.8333V13.8333" fill="currentColor"/>
              </svg>
            </span>
            <b>Review Pasar</b>
          </button>
        </nav>
      </main>
    </div>
  );
}
