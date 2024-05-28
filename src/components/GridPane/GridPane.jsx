import { useState,useRef } from "react";
import './GridPane.css'
export default function GridPane({gameMode,buttonReference,currentPlayer,updateCurrentPlayer,gridTurns,updateGrid}){
  
    function updateData(row,column){
        updateGrid(row,column,currentPlayer);
        updateCurrentPlayer();
        console.log(buttonReference)
    }
    return (
        <>
           { 
           gridTurns.map((rowArray,rowIndex)=>{
               return rowArray.map((arrayElement,columnIndex)=>{
                return (<button ref={(el)=>buttonReference.current[rowIndex][columnIndex]=el} className="grid-item"  key={rowIndex+" "+columnIndex} disabled={gridTurns[rowIndex][columnIndex]!=null || gameMode=="AI"&&currentPlayer=="X"} onClick={()=>updateData(rowIndex,columnIndex)}>{gridTurns[rowIndex][columnIndex]}</button>)
               })
           })
           }
        </>
    );
}