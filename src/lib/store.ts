import { create } from "zustand";

type State = {
  turns: number;
  one: boolean;
  two: boolean;
  three: boolean;
};

type Action = {
  updateTurn: () => void;
  updateOne: (p: State["one"]) => void;
  updateTwo: (p: State["two"]) => void;
  updateThree: (p: State["three"]) => void;
  reset: () => void;
};

const initialValues: State = {
  turns: 0,
  one: false,
  two: false,
  three: false,
};

export const useBoardStore = create<State & Action>((set, get) => ({
  ...initialValues,
  updateTurn: () => set(() => ({ turns: get().turns + 1 })),
  updateOne: (p) => set(() => ({ one: p })),
  updateTwo: (p) => set(() => ({ two: p })),
  updateThree: (p) => set(() => ({ three: p })),
  reset: () => set(initialValues),
}));
