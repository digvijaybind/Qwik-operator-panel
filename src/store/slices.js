import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showNav: false,
};
const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    showModals(state) {
      state.showModal = !state.showModal;
    },
    showNav(state) {
      state.showNav = !state.showNav;
    },
  },
});

export const { showModals,showNav } = operatorSlice.actions;
export default operatorSlice.reducer;
