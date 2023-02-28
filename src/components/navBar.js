import React from "react";

export const NavBar = ({currentItem, setCurrentItem}) =>{
    
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', width: '100%', top: 0}}>
            <h1 style={{color: currentItem===0?'white':'gray'}}
            onClick={()=>{setCurrentItem(0)}}>Ceasar</h1>
            <h1 style={{color: currentItem===1?'white':'gray'}}
            onClick={()=>{setCurrentItem(1)}}>Pomodoro</h1>
            <h1 style={{color: currentItem===2?'white':'gray'}}
            onClick={()=>{setCurrentItem(2)}}>Sound</h1>
        </div>
    );
}