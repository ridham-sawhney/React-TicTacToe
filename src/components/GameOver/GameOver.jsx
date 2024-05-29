import {usestate} from 'react';
import './GameOver.css'
import { WinningQuotes } from '../../Data/WinningQuotes';

export default function GameOver({gameMode,winner,playerNames,resetGame}){
    
    function getRandomInt(){
        if(gameMode=="AI" && winner=="X"){
            return WinningQuotes.length-1
        }
        return Math.floor(Math.random() *(WinningQuotes.length-2))
    }
    return(<>
        <div className='gameOver'>
            <h1>Game Over !</h1>
            {
                winner ?
                <p>{WinningQuotes[getRandomInt()].replace('Player',playerNames[winner])}</p>
                : <p>"Match Draw !"{winner && gameMode =="AI" ? "":" Count it as your win , You can't beat me."}</p>
            }
            <button onClick={resetGame}>Restart Game</button>
        </div>
    
    </>)
}

