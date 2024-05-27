import { useState } from 'react'
import './Player.css';

export default function Player(props){
    const [playerName,setPlayerName] = useState(props.playerNames[props.symbol]);
    const [isEditting,setisEditting] = useState(false);
    function updateEditStatus(){
        if(isEditting){
            updatePlayerName(playerName);
        }
        setisEditting((value)=>!value);
    }

    function updatePlayerName(name){
        props.setPlayerNames((prevPlayerNames)=> {
            prevPlayerNames[props.symbol] = name;
            return prevPlayerNames;
        })
    }
    return(<>
            <div onClick={()=>{!isEditting ? updateEditStatus() : ()=>{}}} className={(props.currentPlayer == props.symbol) ? 'active PlayerDiv':'PlayerDiv'}>
                <div className='PlayerDiv-content'>
                    {
                       isEditting ? <input type="text"  value={playerName} onChange={(evt)=>{setPlayerName(evt.target.value)}}/> : <span>{playerName + ' : ' + props.symbol}</span> 
                    }
                    
                    <button className='PlayerButton' onClick={(event)=>{event.stopPropagation() ; updateEditStatus()}}><span className={isEditting ? "material-symbols-outlined blink":"material-symbols-outlined"}>{isEditting ? 'save': 'edit'}</span></button>
                </div>
            </div>
    </>)
} 