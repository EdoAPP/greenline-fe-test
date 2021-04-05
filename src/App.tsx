import React from "react";

import Navbar from "./components/Navbar";
import ProductsPage from "./containers/ProductsPage";
import ProductProvider from "./context/productContext";

import "./App.css";
import CheckoutPage from "./containers/CheckoutPage";

function App() {
  return (
    <>
      <Navbar />
      <ProductProvider>
        <ProductsPage />
        <CheckoutPage />
      </ProductProvider>
    </>
  );
}

export default App;
