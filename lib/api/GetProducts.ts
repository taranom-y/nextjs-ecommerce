import { Product } from '@/types/productType';

type ProductsResponse = {
  products: Product[];
};

const categories: string[] = [
  'mens-shirts',
  'mens-shoes',
  'womens-dresses',
  'womens-shoes',
];

export async function GetProducts(): Promise<Product[]> {
  const productRequests = categories.map(
    async (category): Promise<ProductsResponse> => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch ${category}:${response.status} ${response.statusText}`,
        );
      }

      return response.json();
    },
  );

  const responses = await Promise.all(productRequests);

  return responses.flatMap((data) => data.products);
}
