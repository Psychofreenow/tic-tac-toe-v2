import { useState } from "react";
import "../app.css";
import Square from "./Square";
import { TURNS } from "../constants";
import "../app.css";
import { WINNER_COMBO } from "../constants";
import WinnerModal from "./winnerModal";
import ResetButton from "./ResetButton";

function Board() {
  const initialBoard = Array(9).fill(null);
  const [currentBoard, setCurrentBoard] = useState(initialBoard);
  const [plays, setPlays] = useState(TURNS.x);
  const [isWinner, setIsWinner] = useState(null);

  const turnOfX = plays === TURNS.x ? "isSelected" : "";
  const turnOfO = plays === TURNS.o ? "isSelected" : "";

  const updateSquare = (index) => {
    if (currentBoard[index] || isWinner) return;
    //Actulizar valor del square dependiendo de si es X o O
    const newBoard = [...currentBoard];
    newBoard[index] = plays;
    setCurrentBoard(newBoard);

    //verificar el ganador
    winnerCheck(newBoard);

    //Actulizar turno y jugada.
    if (plays === TURNS.x) {
      const newTurn = TURNS.o;
      return setPlays(newTurn);
    } else {
      setPlays(TURNS.x);
    }
  };

  const winnerCheck = (board) => {
    for (const currentCombo of WINNER_COMBO) {
      const [a, b, c] = currentCombo;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        const newWinner = board[a];
        return setIsWinner(newWinner);
      }
    }
  };

  return (
    <>
      <main>
        <ResetButton
          initialBoard={initialBoard}
          setCurrentBoard={setCurrentBoard}
          setIsWinner={setIsWinner}
          setPlays={setPlays}
        />
        <div className="board">
          {isWinner && (
            <WinnerModal
              isWinner={isWinner}
              initialBoard={initialBoard}
              setCurrentBoard={setCurrentBoard}
              setIsWinner={setIsWinner}
              setPlays={setPlays}
            />
          )}
          {currentBoard.map((_, index) => (
            <Square key={index} index={index} updateSquare={updateSquare}>
              {currentBoard[index]}
            </Square>
          ))}
        </div>
      </main>
      <footer>
        <Square turnOf={turnOfX}>X</Square>
        <Square turnOf={turnOfO}>O</Square>
      </footer>
    </>
  );
}

export default Board;
