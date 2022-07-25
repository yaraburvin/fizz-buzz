import { useState } from "react"
import {fizzBuzz} from "./utils/fizzBuzz" 

export default function ButtonGameControl() : JSX.Element {
    const [count, setCount] = useState(1)
    const [storedCount, setStoredCount] = useState<number[]>([])

    const hadnleNumberCount = () => {
        setCount(prev => prev + 1);
        }
    const resetTheGame = () => {
        setCount(1)
        setStoredCount([])
    }
    const handleStoreNumbers = () => {
        setStoredCount([...storedCount, count])
    }

    const combinedFunctions = ()=> {
        handleStoreNumbers();
        hadnleNumberCount()
 }
    return (
        <>
        <h1>Fizz-Buzz game</h1>
        <p>Game Field:   {storedCount.map((value,index) => <span key={index}> {fizzBuzz(value)} </span>)}</p>
        <hr />
        <button onClick={ combinedFunctions}>count!</button>
        <button onClick={resetTheGame}>Reset the game!</button>
        </>
        
    )
}
