"use client";

import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import LoginSlice from "./Fethers/LoginSlice";
import CategorySlice from "./Fethers/CategorySlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    category: CategorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
