import { useState } from "react";
import Board from "./Board";

export default function TicTacToc() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const [sort, setSort] = useState('ascending')
  const handleToggle = () => {
    if (sort === 'ascending') {
      setSort('descending')
    } else if (sort === 'descending') {
      setSort('ascending')
    }
  };
  const moves = history.map((squares, move) => {
    let description;

    let searched;
    let index;
    if (move > 0) {
      for (let i = 0; i < history[move].length; i++) {
        if (history[move][i] && history[move][i] !== history[move - 1][i]) {
          searched = `(${Math.floor(i / 3)},${i % 3})`;
          index = move;
          continue;

        }
      }
      if (currentMove === index) {
        description = 'You are at move #…' + searched;
      } else {
        description = 'Go to move #' + searched;
      }
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          currentMove={currentMove} />
      </div>
      <div className="game-info">
        <ol>{sort === 'ascending' ? moves : moves.reverse()}</ol>
      </div>
      <div>
        <button onClick={handleToggle}>Toggle Sort : {sort}</button>
      </div>
    </div>
  );
}

