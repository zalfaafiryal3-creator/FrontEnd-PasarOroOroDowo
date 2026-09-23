import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import InfoKunjungan from './pages/InfoKunjungan/InfoKunjungan';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info-kunjungan" element={<InfoKunjungan />} />
      </Routes>
    </BrowserRouter>
  );
}
