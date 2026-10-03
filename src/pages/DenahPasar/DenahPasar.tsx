import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DenahPasar.css';

export default function Denah() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.key === 'default') {
      navigate('/home');
      return;
    }

    navigate(-1);
  };

  return (
    <main className="denah-page">
      <header className="denah-header">
        <button type="button" className="denah-back-button" onClick={handleBack} aria-label="Kembali">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="denah-header-copy">
          <h1>Denah Pasar Oro-Oro Dowo</h1>
          <p>Lihat tata letak pasar</p>
        </div>
        <span className="denah-header-spacer" aria-hidden="true" />
      </header>

      <section className="denah-content" aria-label="Denah Pasar Oro-Oro Dowo">
        <figure className="denah-card">
          <img src="/assets/denah.jpg" alt="Denah tata letak Pasar Oro-Oro Dowo, Malang" />
        </figure>
      </section>
    </main>
  );
}
