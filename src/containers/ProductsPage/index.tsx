import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ProductList from "../../components/Products/ProductList";
import Box from "@material-ui/core/Box";
import SendIcon from "@material-ui/icons/Send";
import {
  ProductContext,
  ProductsContextType,
} from "../../context/productContext";
import Button from "@material-ui/core/Button";

const ProductsPage = () => {
  const { storeProducts, storeDiscounts, checkout } = useContext(
    ProductContext
  ) as ProductsContextType;
  const isLoading = storeProducts.loading || storeDiscounts.loading;

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Paper variant="outlined">
          <ProductList
            products={storeProducts.result || []}
            discounts={storeDiscounts.result || []}
            isLoading={isLoading}
          />
          {!isLoading && (
            <Box textAlign="right" m={4}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                size="large"
                onClick={checkout}
              >
                Checkout
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default ProductsPage;
