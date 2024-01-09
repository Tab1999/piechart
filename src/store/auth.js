import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isLoggedIn: false,
      userId: null,
      isLoading: false,
      error: null,
    },
    reducers: {
      login(state, action) {
        state.isLoggedIn = true;
        state.userId = action.payload.userId;
       
      },
      logout(state) {
        state.isLoggedIn = false;
        state.userId = null;
      },
      setLoading(state, action) {
        state.isLoading = action.payload;
      },
     
    },
  });

export const authActions = authSlice.actions;
export default authSlice.reducer;