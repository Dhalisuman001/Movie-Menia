import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/Firebase";

const userLoginFormLoacalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userLoginAction = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      localStorage.setItem("userInfo", JSON.stringify(user));
      return user;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const LoginWithGoogle = createSlice({
  name: "UserAuth",
  initialState: {
    user: userLoginFormLoacalStorage,
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(userLoginAction.pending, (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.appError = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});
export const { userLogin } = LoginWithGoogle.actions;
export default LoginWithGoogle.reducer;
