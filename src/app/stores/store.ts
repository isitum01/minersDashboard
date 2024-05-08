import { createContext, useContext } from "react";
import MinerStore from "./minerStore";
import ModalStore from "./modalStore";

interface Store {
  minerStore: MinerStore;
  modalStore: ModalStore;
}

export const store: Store = {
  minerStore: new MinerStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

/**
 * useStore hook that provides store context
 */
export function useStore() {
  return useContext(StoreContext);
}