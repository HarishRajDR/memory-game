import { create } from "zustand";

type State = {
  turns: number;
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
  seven: boolean;
  eight: boolean;
  nine: boolean;
  ten: boolean;
  eleven: boolean;
  tweleve: boolean;
};

type Action = {
  updateTurn: () => void;
  updateOne: (p: State["one"]) => void;
  updateTwo: (p: State["two"]) => void;
  updateThree: (p: State["three"]) => void;
  updateFour: (p: State["four"]) => void;
  updateFive: (p: State["five"]) => void;
  updateSix: (p: State["six"]) => void;
  updateSeven: (p: State["seven"]) => void;
  updateEight: (p: State["eight"]) => void;
  updateNine: (p: State["nine"]) => void;
  updateTen: (p: State["ten"]) => void;
  updateEleven: (p: State["eleven"]) => void;
  updateTweleve: (p: State["tweleve"]) => void;
  reset: () => void;
};

const initialValues: State = {
  turns: 0,
  one: false,
  two: false,
  three: false,
  four: false,
  five: false,
  six: false,
  seven: false,
  eight: false,
  nine: false,
  ten: false,
  eleven: false,
  tweleve: false,
};

export const useBoardStore = create<State & Action>((set, get) => ({
  ...initialValues,
  updateTurn: () => set(() => ({ turns: get().turns + 1 })),
  updateOne: (p) => set(() => ({ one: p })),
  updateTwo: (p) => set(() => ({ two: p })),
  updateThree: (p) => set(() => ({ three: p })),
  updateFour: (p) => set(() => ({ four: p })),
  updateFive: (p) => set(() => ({ five: p })),
  updateSix: (p) => set(() => ({ six: p })),
  updateSeven: (p) => set(() => ({ seven: p })),
  updateEight: (p) => set(() => ({ eight: p })),
  updateNine: (p) => set(() => ({ nine: p })),
  updateTen: (p) => set(() => ({ ten: p })),
  updateEleven: (p) => set(() => ({ eleven: p })),
  updateTweleve: (p) => set(() => ({ tweleve: p })),

  reset: () => set(initialValues),
}));
