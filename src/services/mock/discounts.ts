const discounts: IDiscount[] = [
  {
    id: "abcd_apple",
    productId: "apple_xcs",
    displayName: "Buy at least 2 apples and get 20% off!",
    availableAfter: 2,
    discountPercent: 20,
    applyTo: "each",
  },
  {
    id: "abcd_grapes",
    productId: "bag_grapes_23x",
    displayName:
      "Buy one bag of grapes and get another bag of grapes for free!",
    availableAfter: 2,
    discountPercent: 100,
    applyTo: "after",
  },
];

export default discounts;
