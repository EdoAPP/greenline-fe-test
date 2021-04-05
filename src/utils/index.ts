export const toCurrency = (value: number | null) => {
  if (!value) {
    return "$0.00";
  }

  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const calculateCheckoutPrice = (
  products: ICartProduct[],
  discounts: IDiscount[]
): number => {
  let finalPrice = 0;

  // todo: improve algorithm -> currently runs at O(n*m) n = products, m = discounts
  for (const product of products) {
    const productSubtotal = product.price * product.qty;
    finalPrice += productSubtotal;
    if (product.qty > 0) {
      for (const discount of discounts) {
        if (
          discount.productId === product.id &&
          discount.availableAfter <= product.qty
        ) {
          switch (discount.applyTo) {
            case "each":
              // if discounts apply to each of the products, discount the final price the discountPercent
              finalPrice -= productSubtotal * (discount.discountPercent / 100);
              break;
            case "after":
              // if discounts apply after the available after,
              // then apply the discount only to the amount of products after the min requirement.
              finalPrice -=
                Math.floor(product.qty / discount.availableAfter) *
                product.price *
                (discount.discountPercent / 100);
              break;
            default:
              break;
          }
        }
      }
    }
  }

  return finalPrice;
};
