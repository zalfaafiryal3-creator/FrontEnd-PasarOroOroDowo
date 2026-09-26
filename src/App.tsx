import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import InfoKunjungan from './pages/InfoKunjungan/InfoKunjungan';
import Promo from './pages/Promo/Promo';
import ReviewPasar from './pages/ReviewPasar/ReviewPasar';

const splashLogo = '/assets/Logo%20Oro.png';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing-page', { viewTransition: true });
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="splash-screen" aria-label="Memuat Pasar Oro-Oro Dowo">
      <img src={splashLogo} alt="Logo Pasar Oro-Oro Dowo" className="splash-logo" />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/info-kunjungan" element={<InfoKunjungan />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/review-pasar" element={<ReviewPasar />} />
      </Routes>
    </BrowserRouter>
  );
}
