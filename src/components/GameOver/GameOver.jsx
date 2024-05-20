import {usestate} from 'react';
import './GameOver.css'
import { WinningQuotes } from '../../Data/WinningQuotes';

export default function GameOver({winner,playerNames,resetGame}){
    
    function getRandomInt(){
        return Math.floor(Math.random() *(WinningQuotes.length-1))
    }
    return(<>
        <div className='gameOver'>
            <h1>Game Over !</h1>
            {
                winner ?
                <p>{WinningQuotes[getRandomInt()].replace('Player',playerNames[winner])}</p>
                : <p>"Match Draw !"</p>
            }
            <button onClick={resetGame}>Restart Game</button>
        </div>
    
    </>)
}

