import { useReducer, useState, useEffect } from "react";
import { STATE, reducer } from "./initState";

export default function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, STATE);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);
  const [isX, setIsX] = useState(true);

  useEffect(() => {
    checkWin();
    checkDraw();
  }, [state]);

  function checkWin() {
    const winningConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        state[`box${a}`].a &&
        state[`box${a}`].b === state[`box${b}`].b &&
        state[`box${a}`].b === state[`box${c}`].b
      ) {
        setWin(true);
        return;
      }
    }
  }

  function checkDraw() {
    if (!win) {
      const allBoxesFilled = Object.values(state).every((box) => box.a);
      if (allBoxesFilled) {
        setDraw(true);
        return;
      }
    }
  }

  function handleClick(num) {
    if (!win && !draw) {
      if (isX) {
        dispatch({ type: "x", payload: num });
        setIsX(false);
      } else {
        dispatch({ type: "o", payload: num });
        setIsX(true);
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="board">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button onClick={() => handleClick(num)}>
              {state[`box${num}`].a ? state[`box${num}`].b : ""}
            </button>
          ))}
        </div>
        <div className={`result ${draw || win ? "show-result" : ""}`}>
          {win ? `${isX ? "Player 2" : "Player 1"} wins!` : draw ? "Draw!" : ""}
        </div>
      </div>
    </>
  );
}
