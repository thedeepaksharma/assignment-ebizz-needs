import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  people: [],
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signStart: (state) => {
      state.isFetching = true;
    },
    signSuccess: (state, action) => {
      state.isFetching = false;
      state.people = action.payload;
    },
    signFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { signStart, signSuccess, signFailure } = userSlice.actions;
export default userSlice.reducer;
