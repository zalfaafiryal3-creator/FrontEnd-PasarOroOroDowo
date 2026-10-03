import { useState } from "react";
import { useNavigate } from "react-router-dom";

const asset = (name: string) => `/assets/${name}`;

const products = [
  { name: "Kismis", image: "04adb.png", rating: "4.9", count: "92", price: "Rp 7.000" },
  { name: "keju", image: "ef2b3.png", rating: "5.0", count: "45", price: "Rp 7.000", bestseller: true },
  { name: "kelapa", image: "ac276.png", rating: "4.8", count: "31", price: "Rp 7.000" },
  { name: "Bikang Suji", image: "c2a9f.png", rating: "4.9", count: "19", price: "Rp 4.000", crop: "suji" },
  { name: "Lemper Ayam", image: "230db.png", rating: "4.9", count: "92", price: "Rp 7.000", crop: "lemper" },
];

const gallery = ["b55ea.png", "4ef0e.png", "86d1c.png"];

const initialReviews = [
  {
    name: "Ibu Maya Lestari",
    date: "2 hari lalu • Pembeli Terverifikasi",
    text: "“Bahan katun adem banget, jahitan rapi! Pengiriman lewat kurir pasar cepat sampai dalam 25 menit. Bu Serli juga ramah sekali pas ditanya ukuran via chat.”",
  },
  {
    name: "Dimas Priyambodo",
    date: "1 minggu lalu • Pembeli Terverifikasi",
    text: "“Kemeja linen santai kualitasnya jempolan, warna sesuai foto etalase. Pilihan belanja terpercaya di Pasar Oro-Oro Dowo.”",
  },
];

function Icon({ file, className = "" }: { file: string; className?: string }) {
  return <img src={asset(file)} alt="" aria-hidden="true" className={`shrink-0 ${className}`} />;
}

function Stars({ small = false }: { small?: boolean }) {
  return (
    <span className="flex shrink-0 items-center gap-[2px]" aria-label="5 bintang">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} file={small ? "95bc1.svg" : "2bd96.svg"} />
      ))}
    </span>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="min-h-dvh bg-[#f3eef1]">
      <div className="relative mx-auto min-h-dvh w-full max-w-[402px] overflow-x-clip border-x border-[#ea9caf]/20 bg-[#f0f6df] pb-4 text-[#111c2d] shadow-[0_25px_25px_rgba(0,0,0,0.25)] pj-regular">
      <header id="home" className="h-16 w-full backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1100px] items-center px-4">
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm" aria-label="Kembali ke Home" onClick={() => navigate('/home')}>
            <Icon file="ab505.svg" />
          </button>
          <div className="min-w-0 flex-1 text-center leading-none">
            <h1 className="truncate text-[18px] leading-6 pj-bold">Lumpur Kentang 27</h1>
            <div className="mt-[2px] flex items-center justify-center gap-[6px] text-[10px] leading-[14px] tracking-[0.5px] text-[#485c13] pj-bold">
              <span className="size-2 rounded-full bg-[#c2dc80]" /> BUKA • KIOS A-12
            </div>
          </div>
          <div className="size-10 shrink-0" />
        </div>
      </header>

      <main id="toko" className="mx-auto w-full px-[22px] pb-20 pt-2">
        <section className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_#594045]">
          <div className="relative h-48 overflow-hidden bg-[#d8e3fb]">
            <img src={asset("4110b.png")} alt="" className="absolute inset-0 h-[101.61%] w-full" />
            <img src={asset("ba6b2.png")} alt="Kue lumpur kentang di etalase kios" className="absolute left-[0.13%] top-[-22.89%] h-[159.42%] w-full" />
            <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-[#fbbf24]/40 px-[10px] py-1 text-[10px] leading-[14px] tracking-[0.4px] text-white shadow-sm backdrop-blur-md pj-bold">
              <Icon file="80268.svg" /> Kios Oro-Oro Dowo
            </span>
          </div>
          <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
            <div className="flex items-start gap-3">
              <div className="relative h-6 w-16 shrink-0">
                <div className="absolute -top-10 left-0 size-16 rounded-2xl bg-white p-1 shadow-md">
                  <img src={asset("c83b1.png")} alt="Logo Lumpur Kentang 27" className="size-14 rounded-xl object-cover" />
                </div>
              </div>
              <div className="min-w-0">
                <h2 className="text-[20px] leading-7 tracking-[-0.2px] pj-bold">Lumpur Kentang 27</h2>
                <p className="text-[12px] leading-4 tracking-[0.24px] text-[#594045] pj-semibold">Makanan</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-[#ea9caf]/20 bg-[#c2dc80]/80 px-[9px] pb-[9px] pt-[13px] text-center">
              {[
                ["2bd96.svg", "4.9", "180+ Ulasan"],
                ["3245c.svg", "06.00", "Tutup 17.00"],
                ["d1110.svg", "100%", "Produk Asli"],
              ].map(([icon, value, label]) => (
                <div key={value} className="flex min-w-0 flex-col items-center py-1">
                  <div className="flex items-center gap-1 text-[14px] leading-5 tracking-[0.14px] pj-bold"><Icon file={icon} />{value}</div>
                  <span className="pt-[2px] text-[10px] leading-[14px] tracking-[0.4px] text-[#594045] pj-bold">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#c2dc80]/20 p-2 text-[12px] leading-4">
              <Icon file="fb464.svg" />
              <span className="truncate">Pasar Oro-Oro Dowo, Blok A No. 12, Klojen, Kota Malang</span>
            </div>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#fbbf24] text-[12px] leading-4 tracking-[0.24px] text-white shadow-[0_4px_6px_rgba(213,105,137,0.28)] pj-bold hover:bg-[#edae11]" onClick={() => window.open("https://wa.me/?text=" + encodeURIComponent("Halo, saya ingin menghubungi Lumpur Kentang 27 di Pasar Oro-Oro Dowo, Blok A No. 12."), "_blank", "noopener,noreferrer")}>
              <Icon file="f03c7.svg" /> Hubungi Penjual
            </button>
          </div>
        </section>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow-[0_1px_1px_#594045]">
          <div className="flex items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-[18px] leading-6 pj-bold"><Icon file="37ddf.svg" /> Tentang Kios Kami</h2>
            <span className="shrink-0 rounded-full bg-[#fbbf24] px-2 py-[2px] text-[10px] leading-[14px] tracking-[0.4px] text-white pj-bold">Sejak 2012</span>
          </div>
          <p className="mt-2 text-[14px] leading-[22.75px] text-[#594045]">Lumpur Kentang Wolak Walik 27 adalah lapak kuliner legendaris dan viral di Pasar Rakyat Oro-oro Dowo, Kota Malang, yang menyajikan kue lumpur tradisional berbahan dasar kentang dengan tekstur sangat lembut dan wangi khas.</p>
        </section>

        <section className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-[18px] leading-6 pj-bold">Suasana Kios &amp; Etalase</h2>
              <p className="text-[12px] leading-4 text-[#594045]">Langsung dari lorong Blok A Pasar Oro-Oro Dowo</p>
            </div>
            <button onClick={() => openGallery(0)} className="flex shrink-0 items-center gap-[2px] text-center text-[12px] leading-4 tracking-[0.24px] text-[#594045] pj-bold"><span>Lihat<br />Semua</span><Icon file="2a821.svg" /></button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {gallery.map((image, i) => (
              <button key={image} className="relative h-[114px] overflow-hidden rounded-xl bg-[#d8e3fb] shadow-sm" onClick={() => openGallery(i)} aria-label={`Lihat foto kios ${i + 1}`}>
                <img src={asset(image)} alt={`Suasana kios ${i + 1}`} className={i === 1 ? "absolute left-0 top-[-56.69%] h-[176.02%] w-full" : "h-full w-full object-cover"} />
                {i === 2 && <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-[12px] leading-4 tracking-[0.24px] text-white pj-bold">+6 Foto</span>}
              </button>
            ))}
          </div>
        </section>

        <section id="produk" className="mt-5 scroll-mt-20">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-[18px] leading-6 pj-bold"><Icon file="23e1b.svg" /> Katalog Produk Kios</h2>
            <span className="rounded-full bg-[#fbbf24] px-2 py-[2px] text-[10px] leading-[14px] tracking-[0.4px] text-white pj-bold">5 Pilihan</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <button id={product.bestseller ? "promo" : undefined} key={product.name} onClick={() => setSelectedProduct(product)} className="relative flex h-[290px] min-w-0 flex-col overflow-hidden rounded-2xl border border-[#fbbf24] bg-white p-3 text-left shadow-sm transition-transform hover:-translate-y-1">
                <div className="relative h-[147px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f0f3ff]">
                  <img src={asset(product.image)} alt={product.name} className={`h-full w-full ${product.crop ? `product-${product.crop}` : "object-cover"}`} />
                  {product.bestseller && <span className="absolute left-2 top-2 rounded-full bg-[#c2dc80] px-2 py-[2px] text-[10px] leading-[15px] text-[#485c13] shadow-sm pj-bold">Terlaris</span>}
                </div>
                <div className="mt-[10px] flex items-center gap-1 text-[10px] leading-[14px] tracking-[0.4px] pj-bold"><Icon file="a8fc8.svg" /> {product.rating} <span className="text-[#594045]">({product.count})</span></div>
                <h3 className="mt-1 truncate text-[14px] leading-5 tracking-[0.14px] pj-bold">{product.name}</h3>
                <p className="text-[12px] leading-4 text-[#594045]">Rasanya Enak</p>
                <div className="mt-auto w-full border-t border-[#f0f3ff]/80 pt-[7px]">
                  <p className="text-[18px] leading-[22.5px] text-[#f59e0b] pj-bold">{product.price}</p>
                  <p className="text-[10px] leading-[10px] text-[#594045] pj-regular">/pcs</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="ulasan" className="-mx-3 mt-[13px] rounded-2xl border border-[#e0bec4]/30 bg-white p-[17px] shadow-sm scroll-mt-20">
          <div className="flex items-start justify-between gap-2">
            <h2 className="flex items-start gap-2 text-[18px] leading-6 pj-bold"><Icon file="3032a.svg" className="mt-[3px]" /><span>Ulasan Toko &amp;<br />Pembeli</span></h2>
            <button onClick={() => setReviewOpen(true)} className="flex items-center gap-1 rounded-full bg-[#fbbf24] px-3 py-1 text-[10px] leading-[14px] tracking-[0.4px] text-white shadow-sm pj-bold"><Icon file="34021.svg" /><span className="px-[15px]">+ Tulis<br />Ulasan</span></button>
          </div>
          <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-[#fbbf24]/25 p-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-sm"><Icon file="b39e0.svg" /><span className="text-[18px] leading-6 pj-bold">4.9</span><span className="text-[10px] leading-[14px] text-[#594045] pj-bold">/ 5.0</span></div>
              <div><p className="text-[12px] leading-4 tracking-[0.24px] pj-bold">180+ Ulasan<br />Pembeli</p><p className="text-[11px] font-medium leading-[16.5px] text-[#485c13]">98% Pembeli Puas</p></div>
            </div>
            <Stars />
          </div>
          <div className="mt-3 space-y-[10px]">
            {(allReviewsOpen ? reviews : reviews.slice(0, 2)).map((review, i) => (
              <article key={`${review.name}-${i}`} className="rounded-xl border border-[#c2dc80]/80 bg-[#c2dc80]/35 p-[11px]">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0"><h3 className="text-[12px] leading-4 tracking-[0.24px] pj-bold">{review.name}</h3><p className="text-[10px] leading-[15px] text-[#594045]">{review.date}</p></div>
                  <Stars small />
                </div>
                <p className="mt-[3px] text-[12px] leading-[16.5px] text-[#594045]">{review.text}</p>
              </article>
            ))}
          </div>
          <button onClick={() => setAllReviewsOpen(!allReviewsOpen)} className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl pb-2 pt-[10px] text-[12px] leading-4 tracking-[0.24px] text-[#fbbf24] pj-bold">{allReviewsOpen ? "Tampilkan Lebih Sedikit" : "Lihat Semua 180+ Ulasan Toko"}<Icon file="52f31.svg" /></button>
        </section>
      </main>

      <nav aria-label="Navigasi utama" className="fixed bottom-3 left-1/2 z-30 flex h-[71px] w-[calc(100%-30px)] max-w-[372px] -translate-x-1/2 items-center justify-between rounded-full border border-[#c2dc80] bg-white/95 px-5 shadow-[0_-4px_22px_rgba(89,64,69,0.14)] backdrop-blur-md">
        {[
          ["Home", "dfd0c.svg", "/home"],
          ["Toko", "2781e.svg", "/toko"],
          ["Promo", "75326.svg", "/promo"],
          ["Review Pasar", "3de6e.svg", "/review-pasar"],
        ].map(([label, icon, href]) => (
          <button key={label} type="button" onClick={() => navigate(href)} aria-current={label === "Toko" ? "page" : undefined} className={`flex min-w-[38px] flex-col items-center border-0 bg-transparent p-0 ${label === "Toko" ? "text-[#4b6515]" : "text-[#9ca3af]"}`}>
            <span className={`flex size-8 items-center justify-center rounded-full ${label === "Toko" ? "bg-[#c2dc80]/50" : ""}`}><Icon file={icon} className={`h-5 w-5 max-h-[23px] ${label === "Toko" ? "[filter:brightness(0)_saturate(100%)_invert(30%)_sepia(26%)_saturate(1180%)_hue-rotate(37deg)_brightness(91%)_contrast(90%)]" : ""}`} /></span>
            <span className={`pt-[2px] text-[9.5px] leading-[14px] ${label === "Toko" ? "font-bold" : "font-normal"} ${label === "Review Pasar" ? "text-[9px]" : ""}`}>{label}</span>
          </button>
        ))}
      </nav>

      {galleryOpen && <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 p-5" role="dialog" aria-modal="true" aria-label="Galeri kios" onClick={() => setGalleryOpen(false)}>
        <button className="absolute right-5 top-5 text-3xl text-white" aria-label="Tutup galeri" onClick={() => setGalleryOpen(false)}>×</button>
        <img src={asset(gallery[galleryIndex])} alt={`Suasana kios ${galleryIndex + 1}`} className="max-h-[75dvh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
        <div className="mt-5 flex items-center gap-8 text-white" onClick={(e) => e.stopPropagation()}><button aria-label="Foto sebelumnya" onClick={() => setGalleryIndex((galleryIndex + gallery.length - 1) % gallery.length)}>←</button><span>{galleryIndex + 1} / {gallery.length}</span><button aria-label="Foto berikutnya" onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}>→</button></div>
      </div>}

      {selectedProduct && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-5" role="dialog" aria-modal="true" aria-label={`Detail ${selectedProduct.name}`} onClick={() => setSelectedProduct(null)}>
        <div className="w-full max-w-sm rounded-2xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setSelectedProduct(null)} className="float-right text-xl" aria-label="Tutup">×</button>
          <img src={asset(selectedProduct.image)} alt={selectedProduct.name} className="mx-auto h-56 max-w-full rounded-xl object-contain" />
          <h2 className="mt-4 text-xl pj-bold">{selectedProduct.name}</h2><p className="text-[#594045]">Rasanya Enak</p><p className="mt-2 text-xl text-[#f59e0b] pj-bold">{selectedProduct.price} <span className="text-xs text-[#594045] pj-regular">/pcs</span></p>
        </div>
      </div>}

      {reviewOpen && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-5" role="dialog" aria-modal="true" aria-label="Tulis Ulasan" onClick={() => setReviewOpen(false)}>
        <form className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-5" onClick={(e) => e.stopPropagation()} onSubmit={(e) => { e.preventDefault(); if (reviewName.trim() && reviewText.trim()) { setReviews([{ name: reviewName.trim(), date: "Baru saja • Pembeli", text: reviewText.trim() }, ...reviews]); setAllReviewsOpen(true); setReviewOpen(false); setReviewName(""); setReviewText(""); document.getElementById("ulasan")?.scrollIntoView({ behavior: "smooth" }); } }}>
          <div className="flex items-center justify-between"><h2 className="text-lg pj-bold">Tulis Ulasan</h2><button type="button" aria-label="Tutup" onClick={() => setReviewOpen(false)}>×</button></div>
          <label className="block text-sm">Nama<input required value={reviewName} onChange={(e) => setReviewName(e.target.value)} className="mt-1 w-full rounded-lg border border-[#c2dc80] p-2 outline-[#fbbf24]" /></label>
          <label className="block text-sm">Ulasan<textarea required value={reviewText} onChange={(e) => setReviewText(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-[#c2dc80] p-2 outline-[#fbbf24]" /></label>
          <button type="submit" className="w-full rounded-xl bg-[#fbbf24] p-3 text-white pj-bold">Kirim Ulasan</button>
        </form>
      </div>}
      </div>
    </div>
  );
}
