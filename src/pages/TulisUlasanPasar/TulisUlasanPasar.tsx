import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  Package,
  ParkingSquare,
  Plus,
  Smile,
  Star,
  Store,
  User,
  X,
} from "lucide-react";
import {
  addReview,
  getReviews,
  type CategoryRatings,
} from "../../../../backend/src/clients/reviewApi";

import "./TulisUlasanPasar.css";

const aspects = [
  {
    name: "Kebersihan",
    color: "pink",
    icon: Building2,
  },
  {
    name: "Keramahan",
    color: "green",
    icon: Smile,
  },
  {
    name: "Parkir Tertata",
    color: "green",
    icon: ParkingSquare,
  },
  {
    name: "Kelengkapan Komoditas",
    color: "pink",
    icon: Package,
  },
];

const aspectCategoryMap = {
  Kebersihan: "Kebersihan & Kerapian",
  Keramahan: "Keramahan Pedagang",
  "Parkir Tertata": "Keamanan & Parkir",
  "Kelengkapan Komoditas": "Kelengkapan Komoditas",
} as const;

const ratingLabels: Record<number, string> = {
  1: "Sangat Kecewa",
  2: "Kurang Puas",
  3: "Cukup Baik",
  4: "Puas! / Direkomendasikan",
  5: "Sangat Puas! / Sangat Direkomendasikan",
};

export default function TulisUlasanPasar() {
  const navigate = useNavigate();
  const [reviewCount, setReviewCount] = useState(0);
  const [submitError, setSubmitError] = useState("");

  const [rating, setRating] = useState(5);
  const [selectedAspect, setSelectedAspect] = useState("Semua");
  const [aspectRatings, setAspectRatings] = useState<CategoryRatings>({
    "Kebersihan & Kerapian": 5,
    "Kelengkapan Komoditas": 5,
    "Keramahan Pedagang": 5,
    "Keamanan & Parkir": 5,
  });
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [umkm, setUmkm] = useState(true);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    let active = true;
    getReviews()
      .then((loadedReviews) => {
        if (active) setReviewCount(loadedReviews.length);
      })
      .catch((error: unknown) => {
        if (active) {
          setSubmitError(error instanceof Error ? error.message : "Gagal memuat ulasan.");
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const remainingSlots = 2 - photos.length;

    if (!files || remainingSlots <= 0) return;

    const newPhotos = Array.from(files)
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file));

    setPhotos((prev) => [...prev, ...newPhotos]);
    e.target.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const photo = prev[index];
      if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleRatingChange = (nextRating: number) => {
    setRating(nextRating);
    setAspectRatings({
      "Kebersihan & Kerapian": nextRating,
      "Kelengkapan Komoditas": nextRating,
      "Keramahan Pedagang": nextRating,
      "Keamanan & Parkir": nextRating,
    });
  };

  const handleAspectChange = (aspectName: keyof typeof aspectCategoryMap) => {
    const category = aspectCategoryMap[aspectName];
    setSelectedAspect(aspectName);
    setAspectRatings((current) => ({
      ...current,
      [category]: current[category] === 1 ? 5 : current[category] - 1,
    }));
  };

  const handleSubmit = async () => {
    const tags = [
      aspectRatings["Kebersihan & Kerapian"] >= 4 ? "Kebersihan: Luar Biasa" : null,
      aspectRatings["Keamanan & Parkir"] >= 4 ? "Parkir: Tertata" : null,
    ].filter((tag): tag is string => tag !== null);

    try {
      await addReview({
        name: name.trim() || "Anonim",
        status: umkm ? "Pengunjung Setia" : "Pengunjung",
        rating,
        date: "Baru saja",
        tags,
        text: experience.trim() || "Pengunjung belum menambahkan cerita.",
        photos,
        helpful: 0,
        categories: aspectRatings,
      });
      navigate("/review-pasar");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Gagal mengirim ulasan.");
    }
  };

  return (
    <div className="review-form-page">
      <div className="review-mobile">

        {/* HEADER */}
        <header className="review-header">
          <button
            className="back-button market-review-back-button"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="header-title">
            <h1>Tulis Ulasan Pasar</h1>
            <p>Pasar Oro-Oro Dowo, Malang</p>
          </div>
        </header>

        <main className="review-content">

          {/* MARKET CARD */}
          <section className="market-card">
            <div className="market-image">
              <img
                src="/assets/204f2.png"
                alt="Pasar Oro-Oro Dowo"
              />
            </div>

            <div className="market-info">
              <span className="market-badge">
                Pasar Tradisional
              </span>

              <h2>Pasar Oro-Oro Dowo</h2>

              <div className="market-rating">
                <span>★</span>
                <strong>4.8</strong>
                <span>•</span>
                <small>{reviewCount} ulasan</small>
              </div>
            </div>
          </section>

          {/* RATING */}
          <section className="rating-card">
            <h3>Beri Penilaian Anda</h3>

            <p>
              Bagikan pengalaman kunjungan Anda ke pasar ini
            </p>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={star <= rating ? "active" : ""}
                  onClick={() => handleRatingChange(star)}
                >
                  <Star
                    size={21}
                    fill={star <= rating ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>

            <div className="rating-description">
              <span>●</span>
              {ratingLabels[rating] || "Sangat Puas! / Sangat Direkomendasikan"}
            </div>
          </section>

          {/* ASPECT */}
          <section className="aspect-card">

            <div className="section-heading">
              <div>
                <h3>PENILAIAN ASPEK PASAR</h3>
                <p>Pilih aspek unggulan yang Anda rasakan</p>
              </div>
            </div>

            <div className="aspect-grid">
              {aspects.map((aspect) => {
                const AspectIcon = aspect.icon;

                return (
                  <button
                    key={aspect.name}
                    className={`aspect-item ${aspect.color} ${
                      selectedAspect === aspect.name
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleAspectChange(aspect.name as keyof typeof aspectCategoryMap)}
                  >
                    <span className="aspect-icon">
                      <AspectIcon size={17} />
                    </span>

                    <span className="aspect-name">
                      {aspect.name}
                    </span>
                  </button>
                );
              })}
            </div>

          </section>

          {/* USER */}
          <section className="form-card">

            <label>
              Nama Pengunjung / Penulis
            </label>

            <div className="input-wrapper">
              <User size={12} />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama"
              />
              <Check size={12} className="valid-icon" />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="form-card experience-card">

            <div className="experience-heading">
              <label>
                Ceritakan Pengalaman Anda
              </label>

              <span>
                Maks. 500 karakter
              </span>
            </div>

            <textarea
              value={experience}
              maxLength={500}
              onChange={(e) =>
                setExperience(e.target.value)
              }
              placeholder="Bagikan pengalaman kamu tentang pasar ini..."
            />

            <div className="experience-footer">
              <span>
                ✓ Ulasan membantu orang lain
              </span>

              <span>
                {experience.length}/500
              </span>
            </div>

          </section>

          {/* PHOTOS */}
          <section className="form-card photos-card">

            <div className="photos-heading">
              <label>
                Tambah Foto Kunjungan
                <span> (Opsional)</span>
              </label>

              <small>
                {photos.length}/2 Terpilih
              </small>
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
                <div
                  className="photo-preview"
                  key={photo}
                >
                  <img src={photo} alt="Foto kunjungan" />

                  <button
                    onClick={() => removePhoto(index)}
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}

            </div>

          </section>

          {/* UMKM */}
          <section className="umkm-card">

            <div className="umkm-icon">
              <Store size={15} />
            </div>

            <div className="umkm-text">
              <strong>
                Ulasan Anda Menghidupkan UMKM
              </strong>

              <p>
                Ulasan jujur Anda sangat membantu
                menjaga kualitas layanan pasar serta
                mendukung pedagang lokal.
              </p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={umkm}
                onChange={() => setUmkm(!umkm)}
              />

              <span></span>
            </label>

          </section>

          {/* SUBMIT */}
          <button className="submit-button" type="button" onClick={handleSubmit}>
            Kirim Ulasan Pasar
            <ArrowRightSmall />
          </button>
          {submitError && <p role="alert">{submitError}</p>}

        </main>

        {/* BOTTOM NAV */}
        <nav className="bottom-nav review-page" aria-label="Navigasi utama">
          <button type="button" onClick={() => navigate('/home')}>
            <span><img className="review-nav-home-icon" src="/assets/d27ed.svg" alt="" /></span>
            <b>Home</b>
          </button>
          <button type="button" onClick={() => navigate('/toko')}>
            <span><img src="/assets/2781e.svg" alt="" /></span>
            <b>Toko</b>
          </button>
          <button type="button" onClick={() => navigate('/promo')}>
            <span><img className="market-promo-icon" src="/assets/75326.svg" alt="" /></span>
            <b>Promo</b>
          </button>
          <button type="button" className="active review-tab" onClick={() => navigate('/review-pasar')}>
            <span aria-hidden="true">
              <svg className="nav-review-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96672 12H8.76255L13.3459 7.41667C13.4834 7.27917 13.5865 7.12257 13.6553 6.94688C13.724 6.77118 13.7584 6.59931 13.7584 6.43125C13.7584 6.26319 13.7202 6.09896 13.6438 5.93854C13.5674 5.77813 13.4681 5.62917 13.3459 5.49167L12.5209 4.62083C12.3834 4.48333 12.2306 4.38021 12.0625 4.31146C11.8945 4.24271 11.7188 4.20833 11.5355 4.20833C11.3674 4.20833 11.1955 4.24271 11.0198 4.31146C10.8441 4.38021 10.6875 4.48333 10.55 4.62083L5.96672 9.20417V12V12M12.3834 6.43125V6.43125L11.5355 5.58333V5.58333L12.3834 6.43125V6.43125M7.34172 10.625V9.75417L9.6563 7.43958L10.1146 7.85208L10.5271 8.31042L8.21255 10.625H7.34172V10.625M10.1146 7.85208L10.5271 8.31042V8.31042L9.6563 7.43958V7.43958L10.1146 7.85208V7.85208M10.7105 12H16.9667V10.1667H12.5438L10.7105 12V12M2.30005 19.3333V2.83333C2.30005 2.32917 2.47956 1.89757 2.83859 1.53854C3.19762 1.17951 3.62922 1 4.13338 1H18.8C19.3042 1 19.7358 1.17951 20.0948 1.53854C20.4539 1.89757 20.6334 2.32917 20.6334 2.83333V13.8333C20.6334 14.3375 20.4539 14.7691 20.0948 15.1281C19.7358 15.4872 19.3042 15.6667 18.8 15.6667H5.96672L2.30005 19.3333V19.3333M5.18755 13.8333H18.8V13.8333V13.8333V2.83333V2.83333V2.83333H4.13338V2.83333V2.83333V14.8646L5.18755 13.8333V13.8333M4.13338 13.8333V13.8333V2.83333V2.83333V2.83333V2.83333V2.83333V2.83333V13.8333V13.8333V13.8333V13.8333" fill="currentColor"/>
              </svg>
            </span>
            <b>Review Pasar</b>
          </button>
        </nav>

      </div>
    </div>
  );
}

function ArrowRightSmall() {
  return <ChevronRight size={16} />;
}