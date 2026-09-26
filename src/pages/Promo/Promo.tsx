import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	CalendarDays,
	CheckCircle2,
	Clock3,
	House,
	Info,
	Megaphone,
	MessageSquareText,
	Search,
	Sparkles,
	Store,
	TicketPercent,
} from 'lucide-react';
import './Promo.css';

type PromoItem = {
	title: string;
	image: string;
	status: string;
	imageNote?: string;
	description: string;
	details: { label: string; value: string; icon: 'calendar' | 'clock' }[];
	category: string;
	finePrint: string;
	isOngoing?: boolean;
	isWeekend?: boolean;
};

type PromoFilter = 'all' | 'ongoing' | 'weekend';

const promoList: PromoItem[] = [
	{
		title: 'Diskon Tahu Bakso',
		image: '/assets/promo%20tahu%20bakso.jpg',
		status: 'Sedang Berlangsung',
		imageNote: 'Langsung di Kios',
		description:
			'Lagi nyari camilan penunda lapar yang gurih dan nagih? Tahu Bakso siap nemenin waktu santai kamu! Lengkap dengan 7 varian topping lezat yang bikin makin mantap.',
		details: [
			{ label: 'Periode', value: '1 Sep – 1 Okt 2026', icon: 'calendar' },
			{ label: 'Jam Khusus', value: 'Setiap pukul 06.00 – 09.00 WIB', icon: 'clock' },
		],
		category: 'Zona Makanan',
		finePrint: 'Berlaku otomatis tanpa syarat',
		isOngoing: true,
	},
	{
		title: 'Diskon Cake',
		image: '/assets/promo%20cake.jpg',
		status: 'Akan Datang',
		imageNote: 'Mulai 20 Okt',
		description:
			'Catat tanggalnya! Maniskan harimu dengan kelezatan slice cake pilihan dari kami dengan diskon 30%.',
		details: [
			{ label: 'Periode', value: '1 Okt – 31 Okt 2026', icon: 'calendar' },
			{ label: 'Jam Buka', value: '07.00 – 15.00 WIB (Setiap Hari)', icon: 'clock' },
		],
		category: 'Zona Makanan',
		finePrint: 'Harga promo langsung di tempat',
	},
	{
		title: 'Promo Gado-Gado',
		image: '/assets/promo%20gado%20gado.jpg',
		status: 'Setiap Akhir Pekan',
		imageNote: 'Lantai 2 Pasar',
		description:
			'Bingung mau makan apa pas weekend? Yuk, manjakan lidahmu dengan kelezatan bumbu kacang legendaris dan kesegaran bahan pilihan dari Warung Bu!',
		details: [
			{ label: 'Periode', value: 'Sabtu & Minggu (Oktober 2026)', icon: 'calendar' },
			{ label: 'Waktu', value: '08.00 – 16.00 WIB', icon: 'clock' },
		],
		category: 'Zona Makanan',
		finePrint: 'Harga promo langsung di tempat',
		isWeekend: true,
	},
	{
		title: 'Promo Mie Ayam',
		image: '/assets/promo%20mie%20ayam.jpg',
		status: 'Hari Pasaran Khusus',
		imageNote: '1 Hari Saja',
		description:
			'Khusus di Hari Pasaran Khusus, dapatkan penawaran terbaik untuk nikmati mangkuk mie favoritmu! Kenyal mienya, gurih kuahnya, dan melimpah toppingnya.',
		details: [
			{ label: 'Tanggal', value: 'Selasa, 24 Oktober 2026', icon: 'calendar' },
			{ label: 'Durasi', value: '1 hari penuh (05.00 – 16.00 WIB)', icon: 'clock' },
		],
		category: 'Zona Makanan',
		finePrint: 'Harga promo langsung di tempat',
	},
];

const filterOptions: { id: PromoFilter; label: string }[] = [
	{ id: 'all', label: 'Semua Jadwal' },
	{ id: 'ongoing', label: 'Sedang Berlangsung' },
	{ id: 'weekend', label: 'Akhir Pekan' },
];

function PromoCard({ promo }: { promo: PromoItem }) {
	return (
		<article className="promo-card">
			<div className="promo-image-wrap">
				<img className="promo-image" src={promo.image} alt={promo.title} />
				<span className={`promo-status${promo.isOngoing ? ' ongoing' : ''}`}>
					{promo.status}
				</span>
				{promo.imageNote && <span className="promo-image-note">{promo.imageNote}</span>}
			</div>

			<div className="promo-card-content">
				<h3>{promo.title}</h3>
				<p className="promo-description">{promo.description}</p>

				<div className="promo-detail-box">
					{promo.details.map((detail) => {
						const DetailIcon = detail.icon === 'calendar' ? CalendarDays : Clock3;
						return (
							<div className="promo-detail-row" key={detail.label}>
								<DetailIcon aria-hidden="true" />
								<span className="promo-detail-label">{detail.label}:</span>
								<span className="promo-detail-value">{detail.value}</span>
							</div>
						);
					})}
				</div>

				<div className="promo-card-footer">
					<span className="promo-fine-print">
						<CheckCircle2 aria-hidden="true" />
						{promo.finePrint}
					</span>
					<span className="promo-category">{promo.category}</span>
				</div>
			</div>
		</article>
	);
}

export default function Promo() {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');
	const [activeFilter, setActiveFilter] = useState<PromoFilter>('all');

	const visiblePromos = promoList.filter((promo) => {
		const matchesSearch = `${promo.title} ${promo.status} ${promo.description}`
			.toLowerCase()
			.includes(searchQuery.trim().toLowerCase());
		const matchesFilter =
			activeFilter === 'all' ||
			(activeFilter === 'ongoing' && promo.isOngoing) ||
			(activeFilter === 'weekend' && promo.isWeekend);

		return matchesSearch && matchesFilter;
	});

	const navigationItems = [
		{ label: 'Home', path: '/home', icon: House },
		{ label: 'Toko', path: '/home', icon: Store },
		{ label: 'Promo', path: '/promo', icon: TicketPercent },
		{ label: 'Review Pasar', path: '/review-pasar', icon: MessageSquareText },
	];

	return (
		<div className="promo-page-shell">
			<main className="promo-page">
				<header className="promo-top-header">
					<div className="promo-brand-header">
						<span className="promo-brand-mark">
							<img src="/assets/c03df.svg" alt="" />
						</span>
						<span>Pasar Oro-Oro Dowo</span>
					</div>

					<section className="promo-intro" aria-labelledby="promo-page-title">
						<div className="promo-title-row">
							<div>
								<h1 id="promo-page-title">Info Promo &amp; Event</h1>
								<p>Jadwal &amp; Periode Diskon Pasar</p>
							</div>
							<span className="promo-month">
								<CalendarDays aria-hidden="true" />
								Okt 2026
							</span>
						</div>
					</section>

					<label className="promo-search">
						<Search aria-hidden="true" />
						<input
							type="search"
							value={searchQuery}
							onChange={(event) => setSearchQuery(event.target.value)}
							placeholder="Cari promo sayur, kuliner, jadwal pasar..."
							aria-label="Cari promo, kuliner, atau jadwal pasar"
						/>
					</label>
				</header>

				<div className="promo-content">
					<div className="promo-filter-list" role="group" aria-label="Filter jadwal promo">
						{filterOptions.map((filter) => (
							<button
								type="button"
								className={`promo-filter${activeFilter === filter.id ? ' selected' : ''}`}
								key={filter.id}
								aria-pressed={activeFilter === filter.id}
								onClick={() => setActiveFilter(filter.id)}
							>
								{filter.label}
							</button>
						))}
					</div>

					<section className="featured-event" aria-labelledby="featured-event-title">
						<Sparkles className="featured-sparkle" aria-hidden="true" />
						<span className="featured-label">AGENDA UTAMA PASAR</span>
						<h2 id="featured-event-title">Festival Belanja Pasar</h2>
						<p>
							Penawaran serentak pedagang Pasar Oro-Oro Dowo untuk produk segar,
							bumbu tradisi, dan jajanan tempo doeloe.
						</p>
						<div className="featured-period">
							<span className="featured-period-copy">
								<CalendarDays aria-hidden="true" />
								<span>
									<small>PERIODE BERLAKU</small>
									<strong>15 Okt – 31 Okt 2026</strong>
								</span>
							</span>
							<span className="featured-days">16 Hari</span>
						</div>
					</section>

					<section className="promo-list-section" aria-labelledby="promo-list-title">
						<div className="promo-list-heading">
							<h2 id="promo-list-title">
								<Megaphone aria-hidden="true" />
								Daftar Jadwal Promo
							</h2>
							<span>4 Program Aktif</span>
						</div>

						<div className="promo-card-list">
							{visiblePromos.length > 0 ? (
								visiblePromos.map((promo) => <PromoCard key={promo.title} promo={promo} />)
							) : (
								<p className="promo-empty-state">Tidak ada promo yang cocok.</p>
							)}
						</div>
					</section>

					<aside className="promo-important-info" aria-labelledby="important-info-title">
						<span className="important-info-icon">
							<Info aria-hidden="true" />
						</span>
						<div>
							<h2 id="important-info-title">Informasi Penting</h2>
							<p>
								Seluruh promo pada halaman ini berlaku otomatis saat bertransaksi
								langsung di kasir pedagang selama periode aktif tercantum. Anda
								tidak perlu mengklaim voucher maupun menukarkan kupon apa pun.
							</p>
						</div>
					</aside>
				</div>

				<nav className="promo-bottom-nav" aria-label="Navigasi utama">
					{navigationItems.map((item) => {
						const NavIcon = item.icon;
						const isActive = item.label === 'Promo';
						return (
							<button
								type="button"
								className={isActive ? 'active' : ''}
								key={item.label}
								aria-current={isActive ? 'page' : undefined}
								onClick={() => navigate(item.path)}
							>
								<span className="promo-nav-icon">
									<NavIcon aria-hidden="true" />
								</span>
								<span className="promo-nav-label">{item.label}</span>
							</button>
						);
					})}
				</nav>
			</main>
		</div>
	);
}
