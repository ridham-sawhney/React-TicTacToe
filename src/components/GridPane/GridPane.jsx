import { useState } from "react";
import './GridPane.css'
export default function GridPane({currentPlayer,updateCurrentPlayer,gridTurns,updateGrid}){

    function updateData(row,column){
        updateGrid(row,column,currentPlayer);
        updateCurrentPlayer();
    }
    return (
        <>
           { 
           gridTurns.map((rowArray,columnIndex)=>{
               return rowArray.map((arrayElement,rowIndex)=>{
                return (<button className="grid-item"  key={rowIndex+" "+columnIndex} disabled={gridTurns[rowIndex][columnIndex]!=null} onClick={()=>updateData(rowIndex,columnIndex)}>{gridTurns[rowIndex][columnIndex]}</button>)
               })
           })
           }
        </>
    );
}