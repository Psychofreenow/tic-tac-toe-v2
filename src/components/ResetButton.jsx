import { TURNS } from "../constants";

function ResetButton({ initialBoard, setCurrentBoard, setIsWinner, setPlays }) {
  const handleClick = () => {
    setCurrentBoard(initialBoard);
    setIsWinner(null);
    setPlays(TURNS.x);
  };
  return <button onClick={handleClick}>Reset game</button>;
}

export default ResetButton;
