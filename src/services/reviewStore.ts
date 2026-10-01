export const reviewCategories = [
  'Kebersihan & Kerapian',
  'Kelengkapan Komoditas',
  'Keramahan Pedagang',
  'Keamanan & Parkir',
] as const;

export type ReviewCategory = (typeof reviewCategories)[number];
export type CategoryRatings = Record<ReviewCategory, number>;

export type MarketReview = {
  id: string;
  name: string;
  status: string;
  rating: number;
  date: string;
  tags: string[];
  text: string;
  photos: string[];
  helpful: number;
  categories: CategoryRatings;
};

type NewReview = Omit<MarketReview, 'id'>;

const initialReviews: MarketReview[] = [
  {
    id: 'review-zalfaa',
    name: 'ZALFAA',
    status: 'Pengunjung Setia',
    rating: 5,
    date: 'Kemarin',
    tags: ['Kebersihan: Luar Biasa', 'Parkir: Tertata'],
    text:
      'Pasar tradisional paling bersih dan estetik di Malang! Lorongnya luas, tidak becek sama sekali, dan belanja sayur segar sampai jajanan di sini nyaman banget. Pedagangnya juga ramah-ramah.',
    photos: ['1', '2'],
    helpful: 34,
    categories: {
      'Kebersihan & Kerapian': 5,
      'Kelengkapan Komoditas': 5,
      'Keramahan Pedagang': 5,
      'Keamanan & Parkir': 5,
    },
  },
  {
    id: 'review-rani',
    name: 'Rani',
    status: 'Pengunjung Setia',
    rating: 5,
    date: '3 hari lalu',
    tags: [],
    text:
      'Sekarang makin modern, sudah banyak kios yang terima pembayaran QRIS. Kuliner legendaris di bagian belakang juga lengkap dan enak. Wajib cobain kue lumpur dan mie ayamnya!',
    photos: [],
    helpful: 19,
    categories: {
      'Kebersihan & Kerapian': 5,
      'Kelengkapan Komoditas': 4.8,
      'Keramahan Pedagang': 5,
      'Keamanan & Parkir': 4.5,
    },
  },
  {
    id: 'review-mifta',
    name: 'Mifta',
    status: 'Pengunjung Setia',
    rating: 4,
    date: '1 minggu lalu',
    tags: [],
    text:
      'Tempatnya asri dan bersih. Parkir motor dan mobil tertata rapi. Kalau pagi hari sekitar jam 7-8 cukup ramai tapi arus belanjanya tetap teratur karena lorongnya satu arah.',
    photos: [],
    helpful: 11,
    categories: {
      'Kebersihan & Kerapian': 4.7,
      'Kelengkapan Komoditas': 4.6,
      'Keramahan Pedagang': 4.7,
      'Keamanan & Parkir': 4.3,
    },
  },
];

let reviews = initialReviews;
const listeners = new Set<() => void>();

export function getReviews(): MarketReview[] {
  return reviews;
}

export function subscribeToReviews(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addReview(review: NewReview): void {
  reviews = [{ ...review, id: `review-${Date.now()}` }, ...reviews];
  listeners.forEach((listener) => listener());
}

export function getCategoryAverages(items: MarketReview[]): CategoryRatings {
  return reviewCategories.reduce((averages, category) => {
    const total = items.reduce((sum, review) => sum + review.categories[category], 0);
    averages[category] = items.length > 0 ? Math.min(5, Math.max(0, total / items.length)) : 0;
    return averages;
  }, {} as CategoryRatings);
}

export function getOverallAverage(items: MarketReview[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, review) => sum + review.rating, 0);
  return Math.min(5, Math.max(0, total / items.length));
}

export function incrementHelpful(id: string): void {
  reviews = reviews.map((review) =>
    review.id === id ? { ...review, helpful: review.helpful + 1 } : review
  );
  listeners.forEach((listener) => listener());
}

