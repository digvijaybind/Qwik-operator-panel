import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showUpdateModal: false,
  showNav: false,
  idToBeUpdated: null,
  updateData: {},
  email_address: "",
  operatorAircrafts: [],
  user_id: "",
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
    setUpdatedata(state, action) {
      state.updateData = action.payload;
    },
    setEmailAddress(state, action) {
      state.email_address = action.payload;
    },
    setOperatorAircrafts(state, action) {
      state.operatorAircrafts = action.payload;
    },

    setUserId(state, action) {
      state.user_id = action.payload;
    },
  },
});

export const {
  showModals,
  showNav,
  showUpdateModal,
  setIdToBeUpdated,
  setUpdatedata,
  setEmailAddress,
  setOperatorAircrafts,
  setUserId,
} = operatorSlice.actions;
export default operatorSlice.reducer;
