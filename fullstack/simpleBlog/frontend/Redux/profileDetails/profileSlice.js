import { createSlice } from "@reduxjs/toolkit";

const profileDetails = createSlice({
  name: "profileDetails",
  initialState: {
    userName: null,
    about: null,
    category: null,
    email: null,
    profileImg: null,
    userId: null,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setProfileImg: (state, action) => {
      state.profileImg = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }

  },
});

export const {
  setUserName,
  getUserName,
  setEmail,

  setAbout,


  setProfileImg,

  setUserId,

} = profileDetails.actions;
export default profileDetails.reducer;
