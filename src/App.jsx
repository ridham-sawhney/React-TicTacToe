import { useState } from 'react'
import './App.css'
import Player from "./components/Player/Player";
import GridPane from './components/GridPane/GridPane';
import { winningScenarios } from './Data/WinningScenarios';
import GameOver from './components/GameOver/GameOver';


const grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  let winner = null;
  let isDraw = false;
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [logEntries, updateLogEntries] = useState([]);
  function updateCurrentPlayer() {
    if (currentPlayer == 'O') {
      setCurrentPlayer('X');
    }
    else {
      setCurrentPlayer('O');
    }
  }
  const [playerNames, setPlayerNames] = useState({
    'O': 'Player1',
    'X': 'Player2'
  })
  const [gridTurns, setGridTurns] = useState([...grid.map((innerArray => [...innerArray]))]);
  function updateGrid(row, column, symbol) {
    setGridTurns((prevGridTurns) => {
      prevGridTurns[row][column] = symbol;
      updateLogEntries((logEntries) => [{ rowIndex: row, columnIndex: column, playerSymbol: symbol, playerName: playerNames[symbol] }, ...logEntries])
      return prevGridTurns;
    })
  }
  function resetGame() {
    isDraw = false;
    updateLogEntries([]);
    setGridTurns((gridTurns) => [...grid.map((innerArray => [...innerArray]))]);
  }

  winningScenarios.forEach((scenario) => {
    var value1 = gridTurns[scenario[0].rowIndex][scenario[0].columnIndex];
    var value2 = gridTurns[scenario[1].rowIndex][scenario[1].columnIndex];
    var value3 = gridTurns[scenario[2].rowIndex][scenario[2].columnIndex];

    if ((value1 != null) && (value1 == value2) && (value2 == value3)) {
      winner = value1;
    }
  })

  if (logEntries.length == 9 && winner == null) {
    isDraw = true;
  }
  return (
    <>
      <div className='gameContainer'>
        <div className='Players'>
          <Player symbol={'O'} currentPlayer={currentPlayer} playerNames={playerNames} setPlayerNames={setPlayerNames} />
          <Player symbol={'X'} currentPlayer={currentPlayer} playerNames={playerNames} setPlayerNames={setPlayerNames} />
        </div>

        <div className='grid-container'>
          <GridPane currentPlayer={currentPlayer} updateCurrentPlayer={updateCurrentPlayer} gridTurns={gridTurns} updateGrid={updateGrid} />
        </div>
      </div>
      {(winner || isDraw) && <GameOver winner={winner} playerNames={playerNames} resetGame={resetGame} />}
    </>
  )
}

export default App
