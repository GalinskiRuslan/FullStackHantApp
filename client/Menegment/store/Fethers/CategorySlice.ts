import { Category } from "@/Menegment/models/Category";
import CategoryService from "@/Menegment/services/CategoryService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  category: Category[];
  isLoading: boolean;
  error: any;
  response: string;
  oneCategory: Category;
}
const initialState: LoginState = {
  category: [],
  isLoading: false,
  error: null,
  response: "",
  oneCategory: {
    id: -1,
    category_name: "",
    imageSrc: "",
    description: "",
  },
};
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async function (_, { rejectWithValue }) {
    try {
      const res = await CategoryService.fetchAllCategory();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async function ({ id }: { id: number }, { rejectWithValue }) {
    try {
      const res = await CategoryService.getOneCategory(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const addNewCategory = createAsyncThunk(
  "category/addNewCategory",
  async function (
    {
      category_name,
      imageSrc,
      description,
    }: { category_name: string; imageSrc: File; description: string },
    { rejectWithValue }
  ) {
    try {
      const res = await CategoryService.saveNewCategory(
        category_name,
        imageSrc,
        description
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async function ({ id }: { id: number }, { rejectWithValue }) {
    try {
      const res = await CategoryService.deleteCategory(id);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const changeCategory = createAsyncThunk(
  "category/changeCategory",
  async function (
    {
      id,
      category_name,
      description,
    }: {
      id: number;
      category_name: string;
      description: string;
    },
    { rejectWithValue }
  ) {
    try {
      const res = await CategoryService.changeCat(
        id,
        category_name,
        description
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.category = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewCategory.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(addNewCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOneCategory.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.oneCategory = action.payload;
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default CategorySlice.reducer;
