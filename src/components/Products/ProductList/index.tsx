import React from "react";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProductItem from "../ProductItem";

type ProductListPropTypes = {
  products?: IProduct[];
  isLoading: boolean;
  discounts: IDiscount[];
  checkout?: boolean;
  checkoutProducts?: ICartProduct[];
};

const ProductList = ({
  products,
  isLoading,
  checkout,
  checkoutProducts,
}: ProductListPropTypes) => (
  <List>
    {isLoading && <CircularProgress />}
    {products && products.map((p) => <ProductItem key={p.id} product={p} />)}
    {checkoutProducts &&
      checkoutProducts.map((p) => (
        <ProductItem key={p.id} product={p} checkout={checkout} qty={p.qty} />
      ))}
  </List>
);

export default ProductList;
