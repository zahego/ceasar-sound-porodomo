import React from "react";

export const NavBar = ({currentItem, setCurrentItem}) =>{
    
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', width: '100%', top: 0,
        backgroundColor: 'rgb(48, 65, 83)', marginBottom: '30px', height: '80px', borderBottom: '1px solid grey',}}>
            <h1 style={{color: currentItem===0?'white':'gray', borderRight: '1px solid grey', width: '100%', paddingTop: '15px', margin: 0,}}
            onClick={()=>{setCurrentItem(0)}}>Ceasar</h1>
            <h1 style={{color: currentItem===1?'white':'gray', borderRight: '1px solid grey', width: '100%', paddingTop: '15px', margin: 0}}
            onClick={()=>{setCurrentItem(1)}}>Pomodoro</h1>
            <h1 style={{color: currentItem===2?'white':'gray', width: '100%', paddingTop: '15px', margin: 0}}
            onClick={()=>{setCurrentItem(2)}}>Sound</h1>
        </div>
    );
}