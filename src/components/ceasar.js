import React, { useState } from "react";

export const Ceasar = () =>{
    let COMMON_RES="Please input a string and a key, then press either action button to encrypt or decrypt"
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = ['abcdefghijklmnopqrstuvwxyz']
    const [inputString, setInputString] = useState("")
    const [key, setKey] = useState(0)
    const [result, setResult] = useState(COMMON_RES)
    const checkEmpty= ()=> {
        if(inputString===""){}
    }
    const encryptMethod=()=>{
        let newStringBuilder = ""
        let intKey = parseInt(key)
        if (intKey===NaN){ return setResult('key must be a number')}
        if (intKey === 27){ return setResult('key must be smaller than 27')}
        for(let i=0;i<inputString.length;i++){
            if((inputString[i].charCodeAt()>=65 && inputString[i].charCodeAt()<=(90-intKey))||(inputString[i].charCodeAt()>=97 && inputString[i].charCodeAt()<=(122-intKey))){
                newStringBuilder+=String.fromCharCode(parseInt(inputString[i].charCodeAt())+intKey)
            }
            else if ((inputString[i].charCodeAt()>=(90-intKey+1) && inputString[i].charCodeAt()<=90)||(inputString[i].charCodeAt()>=(122-intKey+1) && inputString[i].charCodeAt()<=122)){
                newStringBuilder+=String.fromCharCode(parseInt(inputString[i].charCodeAt())+intKey-26)
            }
            else{
                newStringBuilder+=  inputString[i]       
            }
            

        }
        return setResult(newStringBuilder)
    }
    const decryptMethod=()=>{
        let newStringBuilder = ""
        let intKey = parseInt(key)
        if (intKey===NaN){ return setResult('key must be a number')}
        if (intKey === 27){ return setResult('key must be smaller than 27')}
        for(let i=0;i<inputString.length;i++){
            if((inputString[i].charCodeAt()>=65 && inputString[i].charCodeAt()<=(90-intKey))||(inputString[i].charCodeAt()>=97 && inputString[i].charCodeAt()<=(122-intKey))){
                newStringBuilder+=String.fromCharCode(parseInt(inputString[i].charCodeAt())-intKey)
            }
            else if ((inputString[i].charCodeAt()>=(90-intKey+1) && inputString[i].charCodeAt()<=90)||(inputString[i].charCodeAt()>=(122-intKey+1) && inputString[i].charCodeAt()<=122)){
                newStringBuilder+=String.fromCharCode(parseInt(inputString[i].charCodeAt())-intKey-26)
            }
            else{
                newStringBuilder+=  inputString[i]       
            }
            

        }
        return setResult(newStringBuilder)
    }
    const clearMethod = () =>{
        setResult(COMMON_RES)
    }
    return(
        <div>
            <label>String: </label>
            <input style={{width: '40%', height: '30px', marginRight: '10%'}} onChange={(e)=>{setInputString(e.target.value); console.log(inputString)}}/>
            <label>Key: </label>
            <input style={{width: '5%', height: '30px'}} defaultValue={1} onChange={(e)=>setKey(e.target.value)} type="number" max={26}/>
            <div style={{display: 'flex', width: '50%', justifyContent: 'space-around', marginLeft: '25%', marginTop: '20px'}}>
            <button onClick={()=>{encryptMethod()}}>encrypt</button>
            <button onClick={()=>{decryptMethod()}}>decrypt</button>
            <button onClick={()=>{clearMethod()}}>clear</button>
            
            </div>
            <div>
                <h2>Answer:</h2>
                {result}</div>

            
        </div>
    );
}