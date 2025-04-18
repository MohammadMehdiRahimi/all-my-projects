import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userIn: false,
    changeProfile: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserIn: (state, action) => {
      state.userIn = action.payload;
    },

    setChangeProfile: (state, action) => {
      state.changeProfile = action.payload;
    },
 
  },
});

export const {
  setToken,
  getToken,
  setUserIn,
  getUserIn,
  setChangeProfile,
  getChangeProfile,
} = authSlice.actions;
export default authSlice.reducer;
