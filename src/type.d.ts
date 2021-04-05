interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ICartProduct extends IProduct {
  qty: number;
}

interface IDiscount {
  id: string;
  productId: string;
  displayName: string;
  availableAfter: number; // meaning discount will be applied after the amount of certain products
  discountPercent: number;
  applyTo: "each" | "after";
}
