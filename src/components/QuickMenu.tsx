import { Link } from 'react-router-dom';

type QuickMenuItem = {
  id: number;
  label: string;
  icon: string;
  to: string;
};

const menuItems: QuickMenuItem[] = [
  { id: 1, label: 'Lokasi Pasar', icon: '📍', to: '/lokasi' },
  { id: 2, label: 'Produk', icon: '🛍️', to: '/produk' },
  { id: 3, label: 'Promo', icon: '🎉', to: '/promo' },
  { id: 4, label: 'Review Pasar', icon: '💬', to: '/review-pasar' },
  { id: 5, label: 'Info Pasar', icon: 'ℹ️', to: '/info-pasar' },
];

const QuickMenu = () => {
  return (
    <nav aria-label="Menu cepat" className="mt-5 grid grid-cols-5 gap-2.5">
      {menuItems.map((item, index) => (
        <Link
          key={item.id}
          to={item.to}
          aria-label={item.label}
          className="flex flex-col items-center gap-2 text-center text-[11px] font-semibold text-[#4B5563]"
        >
          <span
            aria-hidden="true"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg shadow-[0_8px_16px_rgba(17,24,39,0.04)] ${
              index % 2 === 0 ? 'bg-[#F9DDE6] text-[#D56989]' : 'bg-[#DDE9B8] text-[#5F7F3D]'
            }`}
          >
            {item.icon}
          </span>
          <span className="leading-tight">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default QuickMenu;
