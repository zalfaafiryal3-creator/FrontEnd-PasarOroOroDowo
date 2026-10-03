import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Home.css';

const asset = (name: string) => `/assets/${name}`;

const features = [
  { label: "Denah\nPasar", icon: "a9678.svg", tone: "pink" },
  { label: "Chatbot\nRekomendasi", icon: "e365f.svg", tone: "green" },
  { label: "Fasilitas", icon: "f0bb1.svg", tone: "pink" },
  { label: "Rekomendasi", icon: "0c309.svg", tone: "green" },
  { label: "Info\nKunjungan", icon: "23853.svg", tone: "pink" },
];

const categories = [
  { label: "Pakaian", filter: "Mainan & Baju", icon: "3baa8.svg", tone: "pink" },
  { label: "Sembako", filter: "Sembako & Perabotan", icon: "86e23.svg", tone: "green" },
  { label: "Makanan", filter: "Makanan", icon: "43d40.svg", tone: "pink" },
  { label: "Perabotan", filter: "Sembako & Perabotan", icon: "86cbb.svg", tone: "green" },
  { label: "Lainnya", filter: "", icon: "265dd.svg", tone: "plain" },
];

const stores = [
  { id: "lumpur-kentang-27", name: "Lumpur Kentang\n27", category: "Makanan", rating: "4.9", products: "3 Produk", image: "4ef0e.png", imageClass: "store-image-1" },
  { id: "bakso-goreng-bangkit", name: "Bakso Goreng Ayam\nBangkit", category: "Makanan", rating: "4.8", products: "1 Produk", image: "1377a.png", imageClass: "store-image-2" },
  { id: "klepon-ku", name: "Klepon-ku", category: "Makanan", rating: "4.8", products: "3 Produk", image: "f52ae.png", imageClass: "store-image-3" },
  { id: "wiwit-sayur", name: "Wiwit Sayur", category: "Sayur", rating: "4.9", products: "Produk", image: "3a328.png", imageClass: "store-image-4" },
];

function Arrow() {
  return <img src={asset("d28fc.svg")} alt="" className="h-3.5 w-3.5" />;
}

function SectionHeader({ title, onSeeAll }: { title: string; onSeeAll: () => void }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <button type="button" className="see-all" onClick={onSeeAll}>Lihat Semua <Arrow /></button>
    </div>
  );
}

function StoreCard({ store, onOpen }: { store: (typeof stores)[number]; onOpen: (id: string) => void }) {
  return (
    <article className="store-card">
      <div className="store-photo">
        <img src={asset(store.image)} alt={store.name.replace("\n", " ")} className={store.imageClass} />
        <span>{store.category}</span>
      </div>
      <div className="store-details">
        <h3>{store.name.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
        <p className="store-category">{store.category}</p>
        <div className="store-meta"><strong>★ {store.rating}</strong><i /><span>{store.products}</span></div>
      </div>
      <button type="button" className="store-button" onClick={() => onOpen(store.id)}>Lihat Toko</button>
    </article>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [favorite, setFavorite] = useState(false);
  const [query, setQuery] = useState("");
  const isStorePage = location.pathname === '/toko';

  useEffect(() => {
    if (isStorePage) {
      document.getElementById('store-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isStorePage]);

  const handleFeatureClick = (label: string) => {
    if (label === "Denah\nPasar") navigate('/denah');
    if (label === "Fasilitas") navigate('/fasilitas-pasar');
    if (label === "Rekomendasi") navigate('/rekomendasi');
    if (label === "Info\nKunjungan") navigate('/info-kunjungan');
  };

  return (
    <div className="app-shell">
      <main className="mobile-page">
        <header className="top-header">
          <div className="brand-row"><div className="brand-logo"><img src={asset("c03df.svg")} alt="" /></div><h1>Pasar Oro-Oro Dowo</h1></div>
          <label className="search-box"><img src={asset("14528.svg")} alt="" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari toko, produk, atau pedagang..." aria-label="Cari toko, produk, atau pedagang" /></label>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-glow hero-glow-left" /><div className="hero-glow hero-glow-right" />
            <div className="hero-copy"><h2>Pilih<span>Toko Favoritmu</span></h2><p>Temukan berbagai toko menarik<span>di PasarKu</span></p><button type="button" onClick={() => navigate('/toko')}>Jelajahi Sekarang <img src={asset("cabb9.svg")} alt="" /></button></div>
            <img className="hero-bag" src={asset("cb537.svg")} alt="Tas belanja" />
          </section>
          <div className="carousel-dots" aria-hidden="true"><i className="active" /><i /><i /><i /></div>

          <section className="market-card">
            <div className="market-main"><div className="market-photo"><img src={asset("204f2.png")} alt="Pintu masuk Pasar Oro-Oro Dowo" /></div><div className="market-copy"><div className="market-title"><h2>Pasar Oro-Oro Dowo</h2><button type="button" aria-label={favorite ? "Hapus dari favorit" : "Tambahkan ke favorit"} onClick={() => setFavorite((value) => !value)} className={favorite ? "is-favorite" : ""}><img src={asset("eb387.svg")} alt="" /></button></div><h3>Pusat Belanja dan Kuliner<span>Tradisional di Tengah Kota</span></h3><p>Pasar yang sudah berdiri sejak lama dan menjadi ikon belanja masyarakat dengan beragam produk, harga…</p></div></div>
            <div className="market-stats"><div className="stat-item"><div className="stat-icon"><img src={asset("9107e.svg")} alt="" /></div><div><small>Jam Buka</small><strong>06.00 -<br />17.00</strong><em>Setiap Hari</em></div></div><div className="stat-item"><div className="stat-icon"><img src={asset("c5164.svg")} alt="" /></div><div><small>Jumlah<br />Pedagang</small><strong>± 251</strong><em>Pedagang</em></div></div><div className="stat-item location-stat"><div className="stat-icon"><img src={asset("51c04.svg")} alt="" /></div><div><small>Lokasi</small><strong>Klojen, Kota Malang,<br />Jawa Timur</strong></div></div></div>
          </section>

          <nav className="feature-grid" aria-label="Informasi pasar">{features.map((item) => <button type="button" key={item.label} onClick={() => handleFeatureClick(item.label)}><span className={`feature-icon ${item.tone}`}><img src={asset(item.icon)} alt="" /></span><b>{item.label.split("\n").map((line) => <span key={line}>{line}</span>)}</b></button>)}</nav>
          <section className="category-section"><SectionHeader title="Kategori Belanja" onSeeAll={() => navigate('/toko')} /><div className="category-list">{categories.map((item) => <button type="button" className={`category-card ${item.tone}`} key={item.label} onClick={() => navigate(item.filter ? `/toko?category=${encodeURIComponent(item.filter)}` : '/toko')}><span><img src={asset(item.icon)} alt="" /></span><b>{item.label}</b></button>)}</div></section>
          <section className="store-section" id="store-list"><SectionHeader title="Daftar Toko" onSeeAll={() => navigate('/toko')} /><div className="store-grid">{stores.map((store) => <StoreCard store={store} key={store.id} onOpen={(id) => navigate(`/detail-toko/${id}`)} />)}</div></section>
          <section className="visit-card"><div className="visit-copy"><div className="visit-title"><span><img src={asset("a7199.svg")} alt="" /></span><h2>Rencanakan Kunjunganmu</h2></div><p>Cek info terbaru, event, dan promo menarik di<span>Pasar Oro-Oro Dowo.</span></p><button type="button" onClick={() => navigate('/info-kunjungan')}>Lihat Info Kunjungan <img src={asset("0d8ef.svg")} alt="" /></button></div><img src={asset("f6baa.svg")} alt="Ilustrasi kios pasar" className="visit-art" /></section>
        </div>

        <nav className="bottom-nav" aria-label="Navigasi utama"><button type="button" className={!isStorePage ? "active" : ""} onClick={() => navigate('/home')}><span><img src={asset("dfd0c.svg")} alt="" /></span><b>Home</b></button><button type="button" className={isStorePage ? "active" : ""} onClick={() => navigate('/toko')}><span><img src={asset("2781e.svg")} alt="" /></span><b>Toko</b></button><button type="button" onClick={() => navigate('/promo')}><span><img src={asset("75326.svg")} alt="" /></span><b>Promo</b></button><button type="button" className="review-tab" onClick={() => navigate('/review-pasar')}><span><img src={asset("3de6e.svg")} alt="" /></span><b>Review Pasar</b></button></nav>
      </main>
    </div>
  );
}
