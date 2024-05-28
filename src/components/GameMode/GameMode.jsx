import {useState} from 'react';
import './GameMode.css'
import AiIcon from '../../assets/icons/ai.png'
export default function GameMode({gameMode,updateGameMode}){
    return (
        <div className='gameMode'>
            <button onClick={()=>{updateGameMode('AI')}} className={gameMode =="AI" ? "gameMode-button active":"gameMode-button"}><img src={AiIcon} alt="AI" /></button>
            <button onClick={()=>{updateGameMode('MultiPlayer')}}  className={gameMode =="MultiPlayer" ? "gameMode-button active":"gameMode-button"}><span className='material-symbols-outlined'>group</span></button>
        </div>
    )
}