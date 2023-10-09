function Square({ children, index, updateSquare, turnOf }) {
  const handleClickSquare = () => {
    updateSquare(index);
  };
  return (
    <div className={turnOf} onClick={handleClickSquare}>
      {children}
    </div>
  );
}

export default Square;
