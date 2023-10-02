import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};
const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    showModals(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const { showModals } = operatorSlice.actions;
export default operatorSlice.reducer;
