import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showUpdateModal: false,
  showNav: false,
  idToBeUpdated: null,
};
const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    showModals(state) {
      state.showModal = !state.showModal;
    },
    showUpdateModal(state) {
      state.showUpdateModal = !state.showUpdateModal;
    },
    showNav(state) {
      state.showNav = !state.showNav;
    },
    setIdToBeUpdated(state, action) {
      state.idToBeUpdated = action.payload;
    },
  },
});

export const { showModals, showNav, showUpdateModal,setIdToBeUpdated } = operatorSlice.actions;
export default operatorSlice.reducer;
