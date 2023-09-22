import S1 from "./symbols/S1";
import S2 from "./symbols/S2";
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

// Create your store, which includes both state and (optionally) actions
const useBoardStore = create<State & Action>((set, get) => ({
  ...initialValues,
  updateTurn: () => set(() => ({ turns: get().turns + 1 })),
  updateOne: (p) => set(() => ({ one: p })),
  updateTwo: (p) => set(() => ({ two: p })),
  updateThree: (p) => set(() => ({ three: p })),
  reset: () => set(initialValues),
}));

function Board() {
  const turns = useBoardStore((state) => state.turns);
  const updateTurns = useBoardStore((state) => state.updateTurn);

  const one = useBoardStore((state) => state.one);
  const updateOne = useBoardStore((state) => state.updateOne);

  const two = useBoardStore((state) => state.two);
  const updateLast = useBoardStore((state) => state.updateTwo);

  const three = useBoardStore((state) => state.three);
  const updateThree = useBoardStore((state) => state.updateThree);

  const reset = useBoardStore((state) => state.reset);

  const checkTurns = () => {
    if (turns == 2) {
      console.log("Two turns completed");
      reset();
    }
  };
  return (
    <div className="grid gap-5 grid-cols-4">
      <button
        onClick={() => {
          updateOne(true);
          updateTurns();
          checkTurns();
        }}
        disabled={turns == 2}
        className={
          one
            ? "bg-secondary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
            : "bg-primary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
        }
      >
        <div className={one ? "" : "hidden"}>
          <S1 />
        </div>
      </button>
      <button
        onClick={() => {
          updateLast(true);
          updateTurns();
          checkTurns();
        }}
        disabled={turns == 2}
        className={
          two
            ? "bg-secondary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
            : "bg-primary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
        }
      >
        <div className={two ? "" : "hidden"}>
          <S2 />
        </div>
      </button>
      <button
        onClick={() => {
          updateThree(true);
          updateTurns();
          checkTurns();
        }}
        disabled={turns == 2}
        className={
          three
            ? "bg-secondary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
            : "bg-primary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
        }
      >
        <div className={three ? "" : "hidden"}>
          <S2 />
        </div>
      </button>
    </div>
  );
}

export default Board;
