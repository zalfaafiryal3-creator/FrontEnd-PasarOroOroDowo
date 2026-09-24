import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import InfoKunjungan from './pages/InfoKunjungan/InfoKunjungan';
import ReviewPasar from './pages/ReviewPasar/ReviewPasar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info-kunjungan" element={<InfoKunjungan />} />
        <Route path="/review-pasar" element={<ReviewPasar />} />
      </Routes>
    </BrowserRouter>
  );
}
