import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import Typography from "@material-ui/core/Typography";
import QuantityInput from "../../Inputs/QuantityInput";
import {
  ProductContext,
  ProductsContextType,
} from "../../../context/productContext";
import { toCurrency } from "../../../utils";

type ProductItemPropTypes = {
  product: IProduct;
  checkout?: boolean;
  qty?: number;
};

const ProductItem = ({ product, checkout, qty }: ProductItemPropTypes) => {
  const { changeProductQuantity } = React.useContext(
    ProductContext
  ) as ProductsContextType;

  const handleProductQuantity = (value: number) => {
    changeProductQuantity(product, value);
  };

  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={7}>
          <Grid container>
            <Grid item>
              <ListItemAvatar>
                <Avatar>
                  <LocalGroceryStoreIcon />
                </Avatar>
              </ListItemAvatar>
            </Grid>
            <Grid item>
              <ListItemText
                primary={product.name}
                secondary={
                  <>
                    <Typography variant="h5">
                      {toCurrency(product.price)}
                    </Typography>
                    {product.description}
                  </>
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          {!checkout && <QuantityInput onChange={handleProductQuantity} />}
          {checkout && <Typography>Qty: {qty}</Typography>}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ProductItem;
