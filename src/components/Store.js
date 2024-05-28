import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCartSlice";
import AuthReducer from "./AuthSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer
  },
});