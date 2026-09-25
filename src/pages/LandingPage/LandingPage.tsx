import { useNavigate } from 'react-router-dom';
import groupLogo from '../../assets/Group.png';
import './LandingPage.css';

const marketPhoto = '/assets/204f2.png';

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="info-icon">
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Zm0-8.3a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="info-icon">
      <path d="M12 2.8a9.2 9.2 0 1 1 0 18.4 9.2 9.2 0 0 1 0-18.4Zm0 1.9a7.3 7.3 0 1 0 0 14.6 7.3 7.3 0 0 0 0-14.6Zm.9 2.4h-1.8v5.3l4.5 2.6 1-1.7-3.7-2.2V7.1Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-arrow">
      <path d="M5 12h12.2l-3.5-3.5 1.4-1.4L20 12l-4.9 4.9-1.4-1.4L17.2 13H5v-1Z" />
    </svg>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page-shell">
      <main className="landing-page">
        <aside className="brand-panel" aria-label="Branding Pasar Oro-Oro Dowo">
          <div className="brand-illustration">
            <img
              src={groupLogo}
              alt="Logo Pasar Oro-Oro Dowo"
              className="brand-group-logo"
            />
          </div>
        </aside>

        <section className="content-panel">
          <header className="intro-header">
            <h1>Pasar Oro Oro Dowo</h1>
            <p>
              Semua yang kamu butuhkan,
              <br />
              ada di sini!
            </p>
          </header>

          <div className="welcome-section">
            <h2>SELAMAT DATANG!</h2>
            <span className="welcome-line" aria-hidden="true" />
          </div>

          <section className="history-section" aria-labelledby="history-heading">
            <h3 id="history-heading">Sejarah Singkat</h3>
            <p>
              Pasar Oro-Oro Dowo adalah pasar tradisional bersejarah di Kota
              Malang yang dibangun pada masa kolonial Belanda tahun 1932. Kini,
              pasar ini telah direvitalisasi dan menjadi pasar yang bersih,
              modern, namun tetap mempertahankan sekitar 20 kios lama bergaya
              arsitektur kolonial.
            </p>
          </section>

          <div className="info-card" role="list" aria-label="Informasi pasar">
            <div className="info-row" role="listitem">
              <div className="info-icon-wrap">
                <LocationIcon />
              </div>
              <div className="info-copy">
                <div className="info-label">Lokasi</div>
                <div className="info-value">
                  Jl. Guntur No. 20,
                  <br />
                  Kel. Oro-oro Dowo, Kec. Klojen,
                  <br />
                  Kota Malang, Jawa Timur
                </div>
              </div>
            </div>

            <div className="info-row last" role="listitem">
              <div className="info-icon-wrap">
                <ClockIcon />
              </div>
              <div className="info-copy">
                <div className="info-label">Jam Operasional</div>
                <div className="info-value">06.00 – 17.00 WIB</div>
              </div>
            </div>
          </div>

          <figure className="market-photo">
            <img src={marketPhoto} alt="Pintu masuk Pasar Oro-Oro Dowo" />
          </figure>

          <button
            type="button"
            className="next-button"
            onClick={() => navigate('/home')}
          >
            <span>Selanjutnya</span>
            <ArrowRightIcon />
          </button>

          <div className="mobile-indicator" aria-hidden="true" />
        </section>
      </main>
    </div>
  );
}
