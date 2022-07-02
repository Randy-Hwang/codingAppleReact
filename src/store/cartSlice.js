import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "cartItem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseStock(state, idx) {
      // 파라미터를 만들어두고 함수 안에서 사용할 때에는 .payload를 붙여줘야 함
      const item = state.find((i) => parseInt(i.id) === parseInt(idx.payload));
      item.count += 1;
    },

    addItem(state, name) {
      const newItem = { id: state.length + 1, name: name.payload, count: 1 };
      state.push(newItem);
    },
  },
});

export const { increaseStock, addItem } = cartItem.actions;
export default cartItem;
