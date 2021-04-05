import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ProductList from "../../components/Products/ProductList";
import Box from "@material-ui/core/Box";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import {
  ProductContext,
  ProductsContextType,
} from "../../context/productContext";
import { toCurrency } from "../../utils";

const CheckoutPage = () => {
  const {
    products,
    isCheckingout,
    storeDiscounts,
    leaveCheckout,
    checkoutCalculation,
  } = useContext(ProductContext) as ProductsContextType;

  const subTotal = products.reduce((prev, p) => prev + p.price * p.qty, 0);
  const total = checkoutCalculation || 0;

  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      open={isCheckingout}
      onClose={leaveCheckout}
    >
      <Container maxWidth="md">
        <DialogTitle>Checkout</DialogTitle>
        <Box mt={4} mb={4}>
          <Paper variant="outlined">
            <Box textAlign="right" m={4}>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <ProductList
                    checkoutProducts={products || []}
                    discounts={storeDiscounts.result || []}
                    isLoading={false}
                    checkout
                  />
                </Grid>
                <Grid item lg={12}>
                  <div>
                    Subtotal: <b>{toCurrency(subTotal)}</b>
                  </div>
                  <div>
                    Discount: <b>-{toCurrency(subTotal - total)}</b>
                  </div>
                  <div>
                    Total: <b>{toCurrency(total)}</b>
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    size="large"
                    onClick={leaveCheckout}
                  >
                    Pay <b>{toCurrency(checkoutCalculation)}</b>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Dialog>
  );
};

export default CheckoutPage;
