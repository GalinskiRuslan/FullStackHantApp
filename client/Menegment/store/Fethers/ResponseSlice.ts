import ResponseService from "@/Menegment/services/ResponseService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface ResponseInterface {
  error: any | null;
  isLoading: boolean;
  responses: Array<any>;
  responseStatus: string;
}

const initialState: ResponseInterface = {
  error: null,
  isLoading: false,
  responses: [],
  responseStatus: "",
};

export const getAllResponse = createAsyncThunk(
  "getAllResponse",
  async function (_, { rejectWithValue }) {
    try {
      const res = await ResponseService.fetchAllResponse();
      return await res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const sendResponseOnVacansy = createAsyncThunk(
  "sendResponseOnVacansy",
  async function (
    { user_name, user_phone, user_email, vacansy_id, resume }: any,
    { rejectWithValue }
  ) {
    try {
      const res = await ResponseService.sendResponseOnVacansy(
        user_name,
        user_phone,
        user_email,
        vacansy_id,
        resume
      );
      return res.data;
    } catch (error: any) {
      return error.response?.data
        ? rejectWithValue(error.response.data)
        : rejectWithValue(error);
    }
  }
);
export const sendAnonymResponse = createAsyncThunk(
  "sendAnonymResponse",
  async function (
    {
      user_name,
      user_phone,
      user_email,
      resume,
      vacansy_name,
      message,
    }: {
      user_name: string;
      user_phone: string;
      user_email: string;
      resume: File | undefined;
      vacansy_name: string;
      message: string;
    },
    { rejectWithValue }
  ) {
    try {
      const res = await ResponseService.sendAnonymResponse(
        user_name,
        user_phone,
        user_email,
        resume,
        vacansy_name,
        message
      );
      return res.data;
    } catch (error: any) {
      return error.response?.data
        ? rejectWithValue(error.response.data)
        : rejectWithValue(error);
    }
  }
);
export const deleteResponse = createAsyncThunk(
  "deleteResponse",
  async function (id: number, { rejectWithValue, dispatch }) {
    try {
      const res = await ResponseService.deleteResponse(id);
      dispatch(getAllResponse());
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const ResponseSlice = createSlice({
  name: "ResponseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllResponse.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllResponse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.responses = action.payload;
      })
      .addCase(getAllResponse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sendResponseOnVacansy.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendResponseOnVacansy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.responseStatus = "Заявка успешно отправлена";
      })
      .addCase(sendResponseOnVacansy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sendAnonymResponse.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendAnonymResponse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.responseStatus = "Заявка успешно отправлена";
      })
      .addCase(sendAnonymResponse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ResponseSlice.reducer;
