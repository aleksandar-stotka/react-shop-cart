import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
//dev-ol4j0z05.us.auth0.com
//rJRshjXWY8NaTmOeSdLuLU9Wg262qfUE

ReactDOM.render(
  <Auth0Provider
    domain="dev-ol4j0z05.us.auth0.com"
    clientId="rJRshjXWY8NaTmOeSdLuLU9Wg262qfUE"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    <UserProvider />
  </Auth0Provider>,

  document.getElementById("root")
);
