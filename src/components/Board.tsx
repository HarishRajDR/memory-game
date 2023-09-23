import { gridGenerate } from "../lib/grid";
import { useBoardStore } from "../lib/store";
import Symbol from "./Symbol";

const grid = gridGenerate();

function Board() {
  const turns = useBoardStore((state) => state.turns);
  const updateTurns = useBoardStore((state) => state.updateTurn);

  const boardData = [
    {
      stateVariable: useBoardStore((state) => state.one),
      stateFunction: useBoardStore((state) => state.updateOne),
    },
    {
      stateVariable: useBoardStore((state) => state.two),
      stateFunction: useBoardStore((state) => state.updateTwo),
    },
    {
      stateVariable: useBoardStore((state) => state.three),
      stateFunction: useBoardStore((state) => state.updateThree),
    },
    {
      stateVariable: useBoardStore((state) => state.four),
      stateFunction: useBoardStore((state) => state.updateFour),
    },
    {
      stateVariable: useBoardStore((state) => state.five),
      stateFunction: useBoardStore((state) => state.updateFive),
    },
    {
      stateVariable: useBoardStore((state) => state.six),
      stateFunction: useBoardStore((state) => state.updateSix),
    },
    {
      stateVariable: useBoardStore((state) => state.seven),
      stateFunction: useBoardStore((state) => state.updateSeven),
    },
    {
      stateVariable: useBoardStore((state) => state.eight),
      stateFunction: useBoardStore((state) => state.updateEight),
    },
    {
      stateVariable: useBoardStore((state) => state.nine),
      stateFunction: useBoardStore((state) => state.updateNine),
    },
    {
      stateVariable: useBoardStore((state) => state.ten),
      stateFunction: useBoardStore((state) => state.updateTen),
    },
    {
      stateVariable: useBoardStore((state) => state.eleven),
      stateFunction: useBoardStore((state) => state.updateEleven),
    },
    {
      stateVariable: useBoardStore((state) => state.tweleve),
      stateFunction: useBoardStore((state) => state.updateTweleve),
    },
  ];

  const reset = useBoardStore((state) => state.reset);

  const grid = [0, 1, 2];

  const checkTurns = () => {
    if (turns == 1) {
      setTimeout(() => {
        reset();
      }, 2000);
    }
  };
  return (
    <div className="grid gap-5 grid-cols-4">
      {grid.map((p, idx) => (
        <button
          onClick={() => {
            updateTurns();
            boardData[idx].stateFunction(true);
            checkTurns();
          }}
          disabled={turns == 2}
          className={
            boardData[idx].stateVariable
              ? "bg-secondary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
              : "bg-primary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
          }
        >
          <div className={boardData[idx].stateVariable ? "" : ""}>
            <Symbol symbol={p} />
          </div>
        </button>
      ))}
    </div>
  );
}

export default Board;
