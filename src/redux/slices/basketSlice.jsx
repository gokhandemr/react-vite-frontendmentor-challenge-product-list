import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    deleteFromBasket: (state, action) => {
      const newBasket = state.basket.filter((item) => item.name !== action.payload.name || item.timeStamp !== action.payload.timeStamp);
      state.basket = newBasket;
    },
    deleteAllFromBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {addToBasket, deleteFromBasket, deleteAllFromBasket} = basketSlice.actions;

export default basketSlice.reducer;
