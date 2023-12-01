import { Vacansy } from "@/Menegment/models/Vacansy";
import VacansyService from "@/Menegment/services/Vacansy";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  allVacansy: Vacansy[];
  vacansyWithCat: Vacansy[];
  oneVacancy: Vacansy;
  isLoading: boolean;
  error: any;
}
const initialState: LoginState = {
  allVacansy: [],
  vacansyWithCat: [],
  oneVacancy: {
    id: -1,
    vacansy_name: "",
    isActive: false,
    description: "",
    skills: "",
    salary: "",
    experience: "",
    categoryId: -1,
    count_response: -1,
    city: "",
    tasks: "",
    img: "",
    publicDate: "",
  },
  isLoading: false,
  error: null,
};
export const getAllVacansy = createAsyncThunk(
  "vacansy/get",
  async function (_, { rejectWithValue }) {
    try {
      const res = await VacansyService.getAllVacansy();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const getVacancyWithCat = createAsyncThunk(
  "vacansy/getWithCat",
  async function (categoryId: string, { rejectWithValue }) {
    try {
      const res = await VacansyService.getVacancyWithCategory(categoryId);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const getOneVacancy = createAsyncThunk(
  "vacansy/getOne",
  async function (id: number, { rejectWithValue }) {
    try {
      const res = await VacansyService.getOneVacancy(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const addNewVacansy = createAsyncThunk(
  "vacansy/add",
  async function (
    {
      vacansy_name,
      isActive,
      description,
      skills,
      salary,
      expresion,
      categoryId,
      city,
      tasks,
    }: {
      vacansy_name: string;
      isActive: boolean;
      description: string;
      skills: string;
      salary: number;
      expresion: string;
      categoryId: number;
      city: string;
      tasks: string;
    },
    { rejectWithValue }
  ) {
    try {
      const res = await VacansyService.addNewVacansy(
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        categoryId,
        city,
        tasks
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const deleteVacansy = createAsyncThunk(
  "vacansy/delete",
  async function (id: any, { rejectWithValue }) {
    try {
      const res = await VacansyService.deleteVacansy(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const VacansySlice = createSlice({
  name: "vacansy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVacansy.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getAllVacansy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.allVacansy = action.payload;
      })
      .addCase(getAllVacansy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewVacansy.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(addNewVacansy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.allVacansy.push(action.payload);
      })
      .addCase(addNewVacansy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteVacansy.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(deleteVacansy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.allVacansy = state.allVacansy = state.allVacansy.filter(
          (vacansy) => Number(vacansy.id) !== Number(action.payload)
        );
      })
      .addCase(deleteVacansy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getVacancyWithCat.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getVacancyWithCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.vacansyWithCat = action.payload;
      })
      .addCase(getVacancyWithCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOneVacancy.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getOneVacancy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.oneVacancy = action.payload;
      })
      .addCase(getOneVacancy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default VacansySlice.reducer;
