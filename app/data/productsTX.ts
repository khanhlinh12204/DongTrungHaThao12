
import { productsTET } from "./productTET";
import { productsDTHT } from "./productDTHT";
import { productTra } from "./productTra";
import { allYenXaoProducts } from "./productYenXao";
import { healthyProducts } from "./productHealthy";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  groupSlug: string;
  categorySlug: string;
  categoryName: string;
  originalPrice?: string;
  isCombo?: boolean;
  description?: string[]; 
}

const allProducts: Product[] = [
  ...productsTET,
  ...productsDTHT,
  ...productTra,
  ...allYenXaoProducts,
  ...healthyProducts, 
];


export const getAllProducts = (): Product[] => allProducts;


export const getProductsByGroup = (groupSlug: string): Product[] => {
  return allProducts.filter(
    (p) => p.groupSlug.toLowerCase() === groupSlug.toLowerCase()
  );
};

export const getProductsByCategory = (
  groupSlug: string,
  categorySlug: string
): Product[] => {
  return allProducts.filter(
    (p) =>
      p.groupSlug.toLowerCase() === groupSlug.toLowerCase() &&
      p.categorySlug.toLowerCase() === categorySlug.toLowerCase()
  );
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find((p) => p.slug === slug);
};