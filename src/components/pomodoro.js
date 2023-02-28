import React, { useState, useEffect } from "react";

export const Pomodoro = () => {
    const [currentCycle, setCurrentCycle] = useState(0)
    const [workMinute, setWorkMinute] = useState(25)
    const [workSecond, setWorkSecond] = useState(0)
    const [breakMinute, setBreakMinute] = useState(5)
    const [breakSecond, setBreakSecond] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    const handleCounter = () => {
        if (workMinute === 0 && workSecond === 0) {
            if(breakMinute === 0 && breakSecond === 0){
                setWorkMinute(25)
                if(currentCycle<4){
                setBreakMinute(5)
                setCurrentCycle(currentCycle+1)
                }
                else{
                    setBreakMinute(30)
                    setCurrentCycle(0)  
                }
            }
            else if (breakSecond > 0) {
                setBreakSecond(breakSecond - 1);
            }
            else {
                setBreakSecond(59);
                setBreakMinute(breakMinute - 1)
            }
        }
        else {
            if (workSecond > 0) {
                setWorkSecond(workSecond - 1);
            }
            else {
                setWorkSecond(59);
                setWorkMinute(workMinute - 1)
            }
        }

    }
    
    useEffect(() => {
        let interval = null;
        if (isActive && isPaused === false) {
            interval = setInterval(handleCounter, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused, workSecond, breakSecond, workMinute]);

    

    const startTimer = () => {
        if (!isActive) {
            setIsActive(true);
            setIsPaused(false);
        }
        else {
            alert("Timer is already running");
        }
    }
    const pauseTimer = () => {
        
        if (!isPaused) {
            setIsActive(false);
            setIsPaused(true);
        }
        else {
            setIsActive(true);
            setIsPaused(false);
        }

    }

    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(true);
        setCurrentCycle(0)

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
            <div id="leftPart">
                <h2>Work</h2>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <h1 id="workMinute">{workMinute}</h1><h1> : </h1><h1 id="workSecond">{workSecond}</h1>
                </div>
                <button onClick={() => { startTimer() }}>Start</button>
            </div>
            <div id="middlePart">
                <h2>Break</h2>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <h1 id="breakMinute">{breakMinute}</h1><h1> : </h1><h1 id="breakSecond">{breakSecond}</h1>
                </div>
                <button onClick={() => { pauseTimer() }}>Pause</button>
            </div>
            <div id="rightPart">
                <h2>Cycle</h2>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <h1 id="cycle">{currentCycle}</h1>
                </div>
                <button onClick={() => { resetTimer() }}>Reset</button>
            </div>
        </div>
    );
}