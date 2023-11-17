"use client";

import { Provider } from "react-redux";
import { store } from "./Redux-global";

export function ProviderRedux({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
