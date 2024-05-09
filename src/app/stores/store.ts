import { createContext, useContext } from "react";
import MinerStore from "./minerStore";

interface Store {
  minerStore: MinerStore;
}

export const store: Store = {
  minerStore: new MinerStore(),
};

export const StoreContext = createContext(store);

/**
 * useStore hook that provides store context
 */
export function useStore() {
  return useContext(StoreContext);
}
