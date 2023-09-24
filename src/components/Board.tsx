import { useState, useEffect } from "react";
import { gridGenerate } from "../lib/grid";
import { useBoardStore } from "../lib/store";
import Symbol from "./Symbol";
import ReactConfetti from "react-confetti";

type selected = {
  gridNo: number | null;
  contents: number | null;
};

const selectedInit = {
  gridNo: null,
  contents: null,
};

const grid = gridGenerate();

function Board() {
  const [selected1, setSelected1] = useState<selected>(selectedInit);
  const [selected2, setSelected2] = useState<selected>(selectedInit);

  const [confetti, setConfetti] = useState<boolean>(false);

  const turns = useBoardStore((state) => state.turns);
  const updateTurns = useBoardStore((state) => state.updateTurn);
  const resetTurns = useBoardStore((state) => state.resetTurn);

  const boardData = [
    {
      stateVariable: useBoardStore((state) => state.one),
      stateFunction: useBoardStore((state) => state.updateOne),
      stateCorrect: useBoardStore((state) => state.isoneCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsOneCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.two),
      stateFunction: useBoardStore((state) => state.updateTwo),
      stateCorrect: useBoardStore((state) => state.istwoCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsTwoCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.three),
      stateFunction: useBoardStore((state) => state.updateThree),
      stateCorrect: useBoardStore((state) => state.isthreeCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsThreeCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.four),
      stateFunction: useBoardStore((state) => state.updateFour),
      stateCorrect: useBoardStore((state) => state.isfourCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsFourCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.five),
      stateFunction: useBoardStore((state) => state.updateFive),
      stateCorrect: useBoardStore((state) => state.isfiveCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsFiveCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.six),
      stateFunction: useBoardStore((state) => state.updateSix),
      stateCorrect: useBoardStore((state) => state.issixCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsSixCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.seven),
      stateFunction: useBoardStore((state) => state.updateSeven),
      stateCorrect: useBoardStore((state) => state.issevenCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsSevenCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.eight),
      stateFunction: useBoardStore((state) => state.updateEight),
      stateCorrect: useBoardStore((state) => state.iseightCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsEightCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.nine),
      stateFunction: useBoardStore((state) => state.updateNine),
      stateCorrect: useBoardStore((state) => state.isnineCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsNineCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.ten),
      stateFunction: useBoardStore((state) => state.updateTen),
      stateCorrect: useBoardStore((state) => state.istenCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsTenCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.eleven),
      stateFunction: useBoardStore((state) => state.updateEleven),
      stateCorrect: useBoardStore((state) => state.iselevenCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsElevenCorrect),
    },
    {
      stateVariable: useBoardStore((state) => state.tweleve),
      stateFunction: useBoardStore((state) => state.updateTweleve),
      stateCorrect: useBoardStore((state) => state.istweleveCorrect),
      stateCFunction: useBoardStore((state) => state.updateIsTweleveCorrect),
    },
  ];

  const reset = useBoardStore((state) => state.reset);

  useEffect(() => {
    check();
  }, [turns]);

  function update(h: selected) {
    if (turns == 0) {
      setSelected1(h);
    }
    if (turns == 1) {
      setSelected2(h);
    }
  }

  function check() {
    if (turns == 2) {
      if (
        selected1.contents == selected2.contents &&
        selected1.gridNo != selected2.gridNo &&
        selected1.gridNo != null &&
        selected2.gridNo != null
      ) {
        boardData[selected1.gridNo].stateCFunction();
        boardData[selected2.gridNo].stateCFunction();
        resetTurns();
      } else
        setTimeout(() => {
          reset();
          setSelected1(selectedInit);
          setSelected2(selectedInit);
        }, 1000);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center gap-20">
      <ReactConfetti run={confetti} />
      <h1 className="text-5xl font-bricolageGrotesque">Match the Symbols</h1>
      <div className="grid gap-5 grid-cols-4">
        {grid.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              updateTurns();
              boardData[idx].stateFunction(true);
              const h = {
                gridNo: idx,
                contents: p,
              };
              update(h);
            }}
            disabled={
              turns == 2 ||
              boardData[idx].stateCorrect ||
              boardData[idx].stateVariable
            }
            className={
              boardData[idx].stateVariable || boardData[idx].stateCorrect
                ? "bg-secondary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
                : "bg-primary w-40 aspect-[3/4] rounded-md flex items-center justify-center"
            }
          >
            <div
              className={
                boardData[idx].stateVariable || boardData[idx].stateCorrect
                  ? ""
                  : "hidden"
              }
            >
              <Symbol symbol={p} />
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

export default Board;
