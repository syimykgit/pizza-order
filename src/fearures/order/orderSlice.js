import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
  orderId: [],
};

const orderSlice = createSlice({
  name: "orderId",
  initialState,
  reducers: {
    saveOrder(state, action) {
      state.orderId.push(action.payload);
    },
  },
});

export const { saveOrder } = orderSlice.actions;

export default orderSlice.reducer;
