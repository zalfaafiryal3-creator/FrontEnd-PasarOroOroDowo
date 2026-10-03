import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Denah from './pages/DenahPasar/DenahPasar';
import FasilitasPasar from './pages/FasilitasPasar/FasilitasPasar';
import LandingPage from './pages/LandingPage/LandingPage';
import InfoKunjungan from './pages/InfoKunjungan/InfoKunjungan';
import Promo from './pages/Promo/Promo';
import Rekomendasi from './pages/Rekomendasi/Rekomendasi';
import Toko from './pages/Toko/Toko';
import DetailToko from './pages/DetailToko/DetailToko';
import ReviewPasar from './pages/ReviewPasar/ReviewPasar';
import TulisUlasanPasar from './pages/TulisUlasanPasar/TulisUlasanPasar';

const splashLogo = '/assets/logo%20oro%20hijau.png';

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
        <Route path="/denah" element={<Denah />} />
        <Route path="/toko" element={<Toko />} />
        <Route path="/detail-toko" element={<DetailToko />} />
        <Route path="/detail-toko/:id" element={<DetailToko />} />
        <Route path="/fasilitas-pasar" element={<FasilitasPasar />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/info-kunjungan" element={<InfoKunjungan />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/review-pasar" element={<ReviewPasar />} />
        <Route path="/tulis-ulasan-pasar" element={<TulisUlasanPasar />} />
      </Routes>
    </BrowserRouter>
  );
}
