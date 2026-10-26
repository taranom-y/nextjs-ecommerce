import { Product } from '@/types/productType';

export default async function GetProduct(productID: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${productID}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${productID} : ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
