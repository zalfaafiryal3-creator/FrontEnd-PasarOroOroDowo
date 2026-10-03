import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ChevronRight, Plus, Star, Store, User, X } from "lucide-react";
import { addStoreReview, getStoreReviews } from "../../services/storeReviewService";
import "../TulisUlasanPasar/TulisUlasanPasar.css";

const asset = (name: string) => `/assets/${name}`;

const ratingLabels: Record<number, string> = {
  1: "Sangat Kecewa",
  2: "Kurang Puas",
  3: "Cukup Baik",
  4: "Puas! / Direkomendasikan",
  5: "Sangat Puas! / Sangat Direkomendasikan",
};

export default function TulisUlasanToko() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [showBadge, setShowBadge] = useState(true);
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [reviewCount, setReviewCount] = useState(() => getStoreReviews().length);
  const [submitError, setSubmitError] = useState("");
  const photosRef = useRef(photos);
  photosRef.current = photos;

  useEffect(() => () => {
    photosRef.current.forEach((photo) => {
      if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
    });
  }, []);

  const handlePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const remainingSlots = 2 - photos.length;
    if (!files || remainingSlots <= 0) return;

    const newPhotos = Array.from(files)
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file));
    setPhotos((current) => [...current, ...newPhotos]);
    event.target.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((current) => {
      const photo = current[index];
      if (photo?.startsWith("blob:")) URL.revokeObjectURL(photo);
      return current.filter((_, currentIndex) => currentIndex !== index);
    });
  };

  const handleSubmit = () => {
    try {
      const updatedReviews = addStoreReview({
        name: name.trim() || "Anonim",
        date: "Baru saja • Pembeli Terverifikasi",
        text: experience.trim() || "Pengunjung belum menambahkan cerita.",
        rating,
      });
      setReviewCount(updatedReviews.length);
      setSubmitError("");
      setSubmitted(true);
      window.setTimeout(() => navigate("/detail-toko/lumpur-kentang-27"), 900);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Gagal mengirim ulasan.");
    }
  };

  return (
    <div className="review-form-page">
      <div className="review-mobile">
        <header className="review-header">
          <button
            className="back-button"
            type="button"
            aria-label="Kembali ke toko"
            onClick={() => navigate("/detail-toko/lumpur-kentang-27")}
          >
            <ArrowLeft size={15} />
          </button>
          <div className="header-title">
            <h1>Tulis Ulasan Toko</h1>
            <p>Pasar Oro-Oro Dowo, Malang</p>
          </div>
        </header>

        <main className="review-content">
          <section className="market-card">
            <div className="market-image">
              <img src={asset("c83b1.png")} alt="Toko Lumpur Kentang 27" />
            </div>
            <div className="market-info">
              <span className="market-badge">Toko Makanan</span>
              <h2>Lumpur Kentang 27</h2>
              <div className="market-rating">
                <span>★</span>
                <strong>4.9</strong>
                <span>•</span>
                <small>{reviewCount} ulasan</small>
              </div>
            </div>
          </section>

          <section className="rating-card">
            <h3>Beri Penilaian Anda</h3>
            <p>Bagikan pengalaman kamu tentang toko ini</p>
            <div className="stars" aria-label={`${rating} dari 5 bintang`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`${star} bintang`}
                  aria-pressed={star === rating}
                  className={star <= rating ? "active" : ""}
                  onClick={() => setRating(star)}
                >
                  <Star size={21} fill={star <= rating ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            <div className="rating-description">
              <span>●</span>
              {ratingLabels[rating]}
            </div>
          </section>

          <section className="form-card store-review-name-card">
            <label htmlFor="store-reviewer">Nama Pengunjung / Penulis</label>
            <div className="input-wrapper">
              <User size={12} />
              <input
                id="store-reviewer"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Masukkan nama"
              />
              <Check size={12} className="valid-icon" />
            </div>
          </section>

          <section className="form-card experience-card store-review-experience-card">
            <div className="experience-heading">
              <label htmlFor="store-experience">Ceritakan Pengalaman Anda</label>
              <span>Maks. 500 karakter</span>
            </div>
            <textarea
              id="store-experience"
              value={experience}
              maxLength={500}
              onChange={(event) => setExperience(event.target.value)}
              placeholder="Bagikan pengalaman kamu tentang toko ini..."
            />
            <div className="experience-footer">
              <span>✓ Ulasan membantu orang lain</span>
              <span>{experience.length}/500</span>
            </div>
          </section>

          <section className="form-card photos-card">
            <div className="photos-heading">
              <label>
                Tambah Foto Kunjungan
                <span> (Opsional)</span>
              </label>
              <small>{photos.length}/2 Terpilih</small>
            </div>
            <div className="photos-container">
              {photos.length < 2 && (
                <label className="upload-box">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhoto}
                    hidden
                  />
                  <Plus size={20} />
                  <span>+ Foto</span>
                </label>
              )}
              {photos.map((photo, index) => (
                <div className="photo-preview" key={photo}>
                  <img src={photo} alt="Foto ulasan toko" />
                  <button
                    type="button"
                    aria-label={`Hapus foto ${index + 1}`}
                    onClick={() => removePhoto(index)}
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="umkm-card">
            <div className="umkm-icon">
              <Store size={15} />
            </div>
            <div className="umkm-text">
              <strong>Ulasan Anda Menghidupkan UMKM</strong>
              <p>
                Ulasan jujur Anda membantu toko meningkatkan kualitas layanan
                dan mendukung pedagang lokal Pasar Oro-Oro Dowo.
              </p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={showBadge}
                onChange={() => setShowBadge((current) => !current)}
              />
              <span />
            </label>
          </section>

          {submitError && <p role="alert" className="text-[12px] text-[#594045]">{submitError}</p>}
          <button
            className="submit-button"
            type="button"
            onClick={handleSubmit}
          >
            {submitted ? "Ulasan Terkirim" : "Kirim Ulasan"}
            <ChevronRight size={16} />
          </button>
        </main>

        <nav className="bottom-nav review-page" aria-label="Navigasi utama">
          <button type="button" onClick={() => navigate("/home")}>
            <span><img className="review-nav-home-icon" src={asset("d27ed.svg")} alt="" /></span>
            <b>Home</b>
          </button>
          <button type="button" className="active" onClick={() => navigate("/toko")}>
            <span><img src={asset("2781e.svg")} alt="" /></span>
            <b>Toko</b>
          </button>
          <button type="button" onClick={() => navigate("/promo")}>
            <span><img className="market-promo-icon" src={asset("75326.svg")} alt="" /></span>
            <b>Promo</b>
          </button>
          <button type="button" className="review-tab" onClick={() => navigate("/review-pasar")}>
            <span><img src={asset("3de6e.svg")} alt="" /></span>
            <b>Review Pasar</b>
          </button>
        </nav>
      </div>
    </div>
  );
}
