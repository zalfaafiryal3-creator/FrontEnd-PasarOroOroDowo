import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UtensilsCrossed,
  Leaf,
  Utensils,
  Fish,
  ShoppingBasket,
  Rocket,
} from 'lucide-react';
import './Toko.css';

const asset = (name: string) => `/assets/${name}`;

interface CategoryItem {
  id: string;
  name: string;
  label: string;
  tone: 'pink' | 'green' | 'peach';
  icon: React.ElementType;
}

const categories: CategoryItem[] = [
  { id: 'makanan', name: 'Makanan', label: 'Makanan', tone: 'pink', icon: UtensilsCrossed },
  { id: 'sayur-buah', name: 'Sayur & Buah', label: 'Sayur\n& Buah', tone: 'green', icon: Leaf },
  { id: 'kuliner-legend', name: 'Kuliner Legendaris', label: 'Kuliner\nLegend', tone: 'peach', icon: Utensils },
  { id: 'daging-ikan', name: 'Daging & Ikan', label: 'Daging\n& Ikan', tone: 'green', icon: Fish },
  { id: 'sembako-perabotan', name: 'Sembako & Perabotan', label: 'Sembako\n& Perabotan', tone: 'pink', icon: ShoppingBasket },
  { id: 'mainan-baju', name: 'Mainan & Baju', label: 'Mainan\n& Baju', tone: 'green', icon: Rocket },
];

interface StoreItem {
  id: string;
  name: string;
  category: string;
  displayCategory: string;
  badge: string;
  rating: string;
  products: string;
  image: string;
}

const storesData: StoreItem[] = [
  {
    id: 'lumpur-kentang-27',
    name: 'Lumpur Kentang 27',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    products: '3 Produk',
    image: 'lumpur kentang 27.jpeg',
  },
  {
    id: 'bakso-goreng-bangkit',
    name: 'Bakso Goreng Ayam Bangkit',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    products: '1 Produk',
    image: 'bangkit bakso goreng.jpeg',
  },
  {
    id: 'klepon-ku',
    name: 'Klepon-ku',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    products: '3 Produk',
    image: 'klepon.png',
  },
  {
    id: 'pangsit-mie-arema',
    name: 'Pangsit Mie Arema',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    products: 'Produk',
    image: 'pangsit mie arema.png',
  },
  {
    id: 'bagoplek-bakso-goreng',
    name: 'Bagoplek Bakso Goreng',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    products: '1 Produk',
    image: '1377a.png',
  },
  {
    id: 'fresgreen-organic',
    name: 'FresGreen Organic',
    category: 'Sayur & Buah',
    displayCategory: 'Makanan & Minuman',
    badge: 'Makanan & Minuman',
    rating: '4.8',
    products: '1 Produk',
    image: '3a328.png',
  },
  {
    id: 'sego-liwet-kemangi',
    name: 'Sego liwet Bakar Kemangi',
    category: 'Kuliner Legendaris',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    products: '3 Produk',
    image: 'jajanan pasar.jpg',
  },
  {
    id: 'norriture',
    name: 'Norriture',
    category: 'Daging & Ikan',
    displayCategory: 'Daging',
    badge: 'Makanan',
    rating: '4.9',
    products: 'Produk',
    image: 'tempe segar.jpg',
  },
  {
    id: 'toko-sembako-barokah',
    name: 'Toko Sembako Barokah',
    category: 'Sembako & Perabotan',
    displayCategory: 'Sembako & Perabotan',
    badge: 'Sembako',
    rating: '4.9',
    products: '12 Produk',
    image: '204f2.png',
  },
  {
    id: 'kios-mainan-baju',
    name: 'Kios Mainan & Baju Ceria',
    category: 'Mainan & Baju',
    displayCategory: 'Mainan & Baju',
    badge: 'Mainan & Baju',
    rating: '4.7',
    products: '8 Produk',
    image: '2312e.png',
  },
];

export default function Toko() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
    }
  };

  const filteredStores = storesData.filter((store) => {
    const matchesCategory =
      !activeCategory ||
      store.category.toLowerCase() === activeCategory.toLowerCase() ||
      store.badge.toLowerCase().includes(activeCategory.toLowerCase()) ||
      store.displayCategory.toLowerCase().includes(activeCategory.toLowerCase());

    const matchesSearch =
      !searchQuery.trim() ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.displayCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.badge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-shell toko-page">
      <main className="mobile-page">
        {/* HEADER */}
        <header className="toko-header">
          <div className="toko-brand-row">
            <div className="toko-brand-logo">
              <img src={asset('c03df.svg')} alt="" />
            </div>
            <h1>Pasar Oro-Oro Dowo</h1>
          </div>

          <label className="toko-search-box" aria-label="Cari toko, produk, atau pedagang">
            <img src={asset('14528.svg')} alt="" />
            <input
              type="search"
              placeholder="Cari toko, produk, atau pedagang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari toko, produk, atau pedagang"
            />
          </label>
        </header>

        {/* CONTENT */}
        <div className="toko-content">
          {/* KATEGORI BELANJA */}
          <section className="toko-category-section">
            <div className="toko-section-header">
              <h2>Kategori Belanja</h2>
              <img src={asset('d28fc.svg')} alt="" className="chevron-icon" />
            </div>

            {/* SINGLE LARGE WHITE CARD CONTAINER FOR CATEGORIES */}
            <div className="toko-category-card-container" aria-label="Kategori belanja">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.name;

                return (
                  <button
                    type="button"
                    key={cat.id}
                    className={`toko-category-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(cat.name)}
                    aria-pressed={isActive}
                  >
                    <div className={`toko-category-icon-wrapper ${cat.tone}`}>
                      <IconComponent size={20} />
                    </div>
                    <span className="toko-category-label">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* DAFTAR TOKO */}
          <section className="toko-store-section">
            <div className="toko-section-header">
              <h2>Daftar Toko</h2>
            </div>

            <div className="toko-store-grid">
              {filteredStores.length === 0 ? (
                <div className="toko-empty-text">Tidak ada toko yang cocok.</div>
              ) : (
                filteredStores.map((store) => (
                  <article className="toko-store-card" key={store.id}>
                    <div className="toko-store-photo">
                      <img src={asset(store.image)} alt={store.name} />
                      <span>{store.badge}</span>
                    </div>

                    <div className="toko-store-details">
                      <h3>{store.name}</h3>
                      <p className="toko-store-category">{store.displayCategory}</p>
                      <div className="toko-store-meta">
                        <strong>★ {store.rating}</strong>
                        <i />
                        <span>{store.products}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="toko-store-button"
                      onClick={() => navigate(`/detail-toko/${store.id}`)}
                    >
                      Lihat Toko
                    </button>
                  </article>
                ))
              )}
            </div>
          </section>
        </div>

        {/* BOTTOM NAV */}
        <nav className="bottom-nav" aria-label="Navigasi utama">
          <button type="button" onClick={() => navigate('/home')}>
            <span>
              <img src={asset('dfd0c.svg')} alt="" />
            </span>
            <b>Home</b>
          </button>
          <button type="button" className="active" onClick={() => navigate('/toko')}>
            <span>
              <img src={asset('2781e.svg')} alt="" />
            </span>
            <b>Toko</b>
          </button>
          <button type="button" onClick={() => navigate('/promo')}>
            <span>
              <img src={asset('75326.svg')} alt="" />
            </span>
            <b>Promo</b>
          </button>
          <button type="button" className="review-tab" onClick={() => navigate('/review-pasar')}>
            <span>
              <img src={asset('3de6e.svg')} alt="" />
            </span>
            <b>Review Pasar</b>
          </button>
        </nav>
      </main>
    </div>
  );
}
