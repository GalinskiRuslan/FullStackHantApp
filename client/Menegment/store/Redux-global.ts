"use client";

import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import LoginSlice from "./Fethers/LoginSlice";
import CategorySlice from "./Fethers/CategorySlice";
import VacansySlice from "./Fethers/VacansySlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    category: CategorySlice,
    vacansy: VacansySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
