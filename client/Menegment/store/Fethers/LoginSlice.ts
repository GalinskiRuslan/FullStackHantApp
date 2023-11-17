import { UserModel } from "@/Menegment/models/UserModel";
import AuthService from "@/Menegment/services/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  user: UserModel;
  isLoading: boolean;
  error: any;
  isAuth: boolean;
  loginError: any;
}
const initialState: LoginState = {
  user: {
    id: -1,
    user_email: "",
    user_name: "",
    user_surmane: "",
    user_phone: "",
    user_role: "",
    resume: "",
  },
  isLoading: false,
  error: null,
  isAuth: false,
  loginError: null,
};
export const loginFech = createAsyncThunk(
  "login/fech",
  async function (
    { user_email, password }: { user_email: string; password: string },
    { rejectWithValue }
  ) {
    try {
      const res = await AuthService.login(user_email, password);
      const data = res.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuth", "true");
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const checkIsAuth = createAsyncThunk(
  "login/check",
  async function (_, { rejectWithValue }) {
    try {
      const res = await AuthService.checkIsAuth();
      const data = res.data;
      localStorage.setItem("isAuth", res.data.user.user_role);
      return data;
    } catch (error: any) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      return rejectWithValue(error);
    }
  }
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
        id: -1,
        user_email: "",
        user_name: "",
        user_surmane: "",
        user_phone: "",
        user_role: "",
        resume: "",
      };
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFech.pending, (state) => {
        state.isLoading = true;
        state.loginError = "";
      })
      .addCase(loginFech.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginError = "";
        state.user = action.payload.user;
        state.isAuth = true;
      })
      .addCase(loginFech.rejected, (state, action) => {
        state.isLoading = false;
        state.loginError = action.payload;
      })
      .addCase(checkIsAuth.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(checkIsAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.user = action.payload.user;
        state.isAuth = true;
      })
      .addCase(checkIsAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
      });
  },
});

export default LoginSlice.reducer;
export const { logout } = LoginSlice.actions;
