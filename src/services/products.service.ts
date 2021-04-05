import mockProducts from "./mock/products";
import mockDiscounts from "./mock/discounts";

export const getProducts = async (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(mockProducts);
    }, 1000);
  });
};

export const getDiscounts = (): Promise<IDiscount[]> => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(mockDiscounts);
    }, 1000);
  });
};
