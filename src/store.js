import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./fearures/user/userSlice";
import cartReducer from "./fearures/cart/cartSlice";
import orderReducer from "./fearures/order/orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
