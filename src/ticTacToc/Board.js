import Square from "./Square";


export default function Board({ xIsNext, squares, onPlay }) {

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const drawBoard = new Array(9).fill(null).map((v, i) => i).reduce((result, value, index) => {
    if (index % 3 === 0) {
      result.push([value]);
    } else {
      result[Math.floor(index / 3)].push(value);
    }
    return result;
  }, []).map((v, i) => {
    return (<div className="board-row" key={i}>
      {v.map((v2,i2)=>{return <Square value={squares[v2]} onSquareClick={() => handleClick(v2)}></Square>})}
    </div>)
  })


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (<>
    <div className="status">{status}</div>
    {drawBoard}
  </>)
}