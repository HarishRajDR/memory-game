import { create } from "zustand";

type State = {
  turns: number;
  one: boolean;
  isoneCorrect: boolean;
  two: boolean;
  istwoCorrect: boolean;
  three: boolean;
  isthreeCorrect: boolean;
  four: boolean;
  isfourCorrect: boolean;
  five: boolean;
  isfiveCorrect: boolean;
  six: boolean;
  issixCorrect: boolean;
  seven: boolean;
  issevenCorrect: boolean;
  eight: boolean;
  iseightCorrect: boolean;
  nine: boolean;
  isnineCorrect: boolean;
  ten: boolean;
  istenCorrect: boolean;
  eleven: boolean;
  iselevenCorrect: boolean;
  tweleve: boolean;
  istweleveCorrect: boolean;
};

type Action = {
  updateTurn: () => void;
  resetTurn: () => void;

  updateOne: (p: State["one"]) => void;
  updateIsOneCorrect: () => void;

  updateTwo: (p: State["two"]) => void;
  updateIsTwoCorrect: () => void;

  updateThree: (p: State["three"]) => void;
  updateIsThreeCorrect: () => void;

  updateFour: (p: State["four"]) => void;
  updateIsFourCorrect: () => void;

  updateFive: (p: State["five"]) => void;
  updateIsFiveCorrect: () => void;

  updateSix: (p: State["six"]) => void;
  updateIsSixCorrect: () => void;

  updateSeven: (p: State["seven"]) => void;
  updateIsSevenCorrect: () => void;

  updateEight: (p: State["eight"]) => void;
  updateIsEightCorrect: () => void;

  updateNine: (p: State["nine"]) => void;
  updateIsNineCorrect: () => void;

  updateTen: (p: State["ten"]) => void;
  updateIsTenCorrect: () => void;

  updateEleven: (p: State["eleven"]) => void;
  updateIsElevenCorrect: () => void;

  updateTweleve: (p: State["tweleve"]) => void;
  updateIsTweleveCorrect: () => void;

  reset: () => void;
};

const initialValues = {
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
  isoneCorrect: false,
  istwoCorrect: false,
  isthreeCorrect: false,
  isfourCorrect: false,
  isfiveCorrect: false,
  issixCorrect: false,
  issevenCorrect: false,
  iseightCorrect: false,
  isnineCorrect: false,
  istenCorrect: false,
  iselevenCorrect: false,
  istweleveCorrect: false,
  updateTurn: () => set(() => ({ turns: get().turns + 1 })),
  resetTurn: () => set(() => ({ turns: 0 })),

  updateOne: (p) => set(() => ({ one: p })),
  updateIsOneCorrect: () => set(() => ({ isoneCorrect: true })),

  updateTwo: (p) => set(() => ({ two: p })),
  updateIsTwoCorrect: () => set(() => ({ istwoCorrect: true })),

  updateThree: (p) => set(() => ({ three: p })),
  updateIsThreeCorrect: () => set(() => ({ isthreeCorrect: true })),

  updateFour: (p) => set(() => ({ four: p })),
  updateIsFourCorrect: () => set(() => ({ isfourCorrect: true })),

  updateFive: (p) => set(() => ({ five: p })),
  updateIsFiveCorrect: () => set(() => ({ isfiveCorrect: true })),

  updateSix: (p) => set(() => ({ six: p })),
  updateIsSixCorrect: () => set(() => ({ issixCorrect: true })),

  updateSeven: (p) => set(() => ({ seven: p })),
  updateIsSevenCorrect: () => set(() => ({ issevenCorrect: true })),

  updateEight: (p) => set(() => ({ eight: p })),
  updateIsEightCorrect: () => set(() => ({ iseightCorrect: true })),

  updateNine: (p) => set(() => ({ nine: p })),
  updateIsNineCorrect: () => set(() => ({ isnineCorrect: true })),

  updateTen: (p) => set(() => ({ ten: p })),
  updateIsTenCorrect: () => set(() => ({ istenCorrect: true })),

  updateEleven: (p) => set(() => ({ eleven: p })),
  updateIsElevenCorrect: () => set(() => ({ iselevenCorrect: true })),

  updateTweleve: (p) => set(() => ({ tweleve: p })),
  updateIsTweleveCorrect: () => set(() => ({ istweleveCorrect: true })),

  reset: () => set(initialValues),
}));
