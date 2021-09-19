import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // hte item exists in the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "cant remove the product since item of this id doesnt exist in the basket "
        );
      }
      state.items = newBasket;

      // state.items = state.items.filter(item.id != action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors --to pull information from the global store

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
