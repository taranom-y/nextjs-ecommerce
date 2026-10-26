export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  images: string[];
  rating: number;
  brand: string;
  discountPercentage: number;
  reviews?: Review[];
};
