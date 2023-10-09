import ResetButton from "./ResetButton";
import "../app.css";

function WinnerModal({
  isWinner,
  initialBoard,
  setCurrentBoard,
  setIsWinner,
  setPlays,
}) {
  return (
    <section className="winnerModal">
      <div>
        <h1>{`GANÓ: ${isWinner}`}</h1>
        <ResetButton
          initialBoard={initialBoard}
          setCurrentBoard={setCurrentBoard}
          setIsWinner={setIsWinner}
          setPlays={setPlays}
        />
      </div>
    </section>
  );
}

export default WinnerModal;
