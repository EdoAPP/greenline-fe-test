import React from "react";
import { useAsync, UseAsyncReturn } from "react-async-hook";
import { getDiscounts, getProducts } from "../services/products.service";
import { calculateCheckoutPrice } from "../utils";

export type ProductsContextType = {
  products: ICartProduct[];
  storeProducts: UseAsyncReturn<IProduct[], never[]>;
  storeDiscounts: UseAsyncReturn<IDiscount[], never[]>;
  changeProductQuantity: (product: IProduct, qty: number) => void;
  checkout: () => void;
  leaveCheckout: () => void;
  isCheckingout: boolean;
  checkoutCalculation: number | null;
};

export const ProductContext = React.createContext<ProductsContextType | null>(
  null
);

const ProductProvider = ({ children }: { children?: React.ReactNode }) => {
  const [products, setProducts] = React.useState<ICartProduct[]>([]);
  const [onCheckout, setOnCheckout] = React.useState<boolean>(false);
  const [checkoutCalculation, setCheckoutCalculation] = React.useState<
    number | null
  >(null);

  const storeProducts = useAsync(getProducts, []);
  const storeDiscounts = useAsync(getDiscounts, []);

  const changeProductQuantity = (product: IProduct, qty: number) => {
    setProducts((prev) => {
      const existingProduct = prev.findIndex((p) => p.id === product.id);
      if (existingProduct >= 0) {
        const newProducts = [...prev];
        newProducts[existingProduct].qty = qty;
        return newProducts;
      } else {
        return [...prev, { ...product, qty: qty }];
      }
    });
  };

  const handleCheckout = () => {
    const checkoutPrice = calculateCheckoutPrice(
      products,
      storeDiscounts.result || []
    );
    setOnCheckout(true);
    setCheckoutCalculation(checkoutPrice);
  };

  const leaveCheckout = () => {
    setOnCheckout(false);
    setCheckoutCalculation(null);
  };

  return (
    <ProductContext.Provider
      value={{
        changeProductQuantity,
        products,
        storeDiscounts,
        storeProducts,
        checkout: handleCheckout,
        leaveCheckout,
        isCheckingout: onCheckout,
        checkoutCalculation,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
