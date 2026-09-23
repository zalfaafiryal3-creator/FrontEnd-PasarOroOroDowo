import type { Category } from '../types/Category';
import type { Product } from '../types/Product';
import type { Store } from '../types/Store';

export type Market = {
  id: number;
  name: string;
  description: string;
  location: string;
  openingHours: string;
  image: string;
};

export type Recommendation = {
  id: number;
  title: string;
  description: string;
  cta: string;
};

export type Promo = {
  id: number;
  title: string;
  description: string;
  discount: string;
};

export type Review = {
  id: number;
  user: string;
  review: string;
  rating: number;
};

const API_BASE_URL = 'http://localhost:4000/api';

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const getMarket = async (): Promise<Market> => request<Market>('/market');
export const getCategories = async (): Promise<Category[]> => request<Category[]>('/categories');
export const getStores = async (): Promise<Store[]> => request<Store[]>('/stores');
export const getProducts = async (): Promise<Product[]> => request<Product[]>('/products');
export const getRecommendations = async (): Promise<Recommendation[]> => request<Recommendation[]>('/recommendations');
export const getPromos = async (): Promise<Promo[]> => request<Promo[]>('/promos');
export const getReviews = async (): Promise<Review[]> => request<Review[]>('/reviews');
