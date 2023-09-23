import { useBoardStore } from "../lib/store";
import S1 from "./symbols/S1";
import S2 from "./symbols/S2";

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
    if (turns == 1) {
      setTimeout(() => {
        reset();
      }, 1000);
    }
  };
  return (
    <div className="grid gap-5 grid-cols-4">
      <button
        onClick={() => {
          updateTurns();
          updateOne(true);
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
          updateTurns();
          updateLast(true);
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
          updateTurns();
          updateThree(true);
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
