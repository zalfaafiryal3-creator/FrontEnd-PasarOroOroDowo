import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import groupLogo from './assets/Group.png';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import InfoKunjungan from './pages/InfoKunjungan/InfoKunjungan';
import ReviewPasar from './pages/ReviewPasar/ReviewPasar';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const transitionDocument = document as Document & {
        startViewTransition?: (update: () => void) => void;
      };

      if (transitionDocument.startViewTransition) {
        transitionDocument.startViewTransition(() => navigate('/landing-page'));
      } else {
        navigate('/landing-page');
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="splash-screen" aria-label="Memuat Pasar Oro-Oro Dowo">
      <img src={groupLogo} alt="Logo Pasar Oro-Oro Dowo" className="splash-logo" />
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
        <Route path="/review-pasar" element={<ReviewPasar />} />
      </Routes>
    </BrowserRouter>
  );
}
