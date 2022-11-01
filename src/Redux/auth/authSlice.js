import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
import { toast } from 'react-hot-toast';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
      toast.success(`You are registred and logged in `, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      toast.error(`Sorry, ${action.payload} `, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [logIn.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.success(`You are logged in `, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      toast.error(`Sorry, try again `, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [logOut.pending](state) {
      state.error = null;
      state.isLoading = true;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      toast.success(`You are logged out `, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      toast.error(`Sorry, ${action.payload}`, {
        duration: 4000,
        position: 'top-center',
      });
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
