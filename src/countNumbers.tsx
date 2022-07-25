import { useState } from "react"
import {fizzBuzz} from "./utils/fizzBuzz" 

export default function ButtonGameControl() : JSX.Element {
    const [count, setCount] = useState(0)
    const [storedCount, setStoredCount] = useState<number[]>([])

    const hadnleNumberCount = () => {
        setCount(prev => prev + 1);
        }
    const resetTheGame = () => {
        setCount(0)
        setStoredCount([])
    }
    const handleStoreNumbers = () => {
        setStoredCount([...storedCount, count])
    }

    return (
        <>
        <h1>Fizz-Buzz game</h1>
        <p>Game Field:</p>
        {storedCount.map((value,index) => <p key={index}> {fizzBuzz(value)} </p>)}
        <hr />
        <button onClick={() => {handleStoreNumbers(), hadnleNumberCount()}}>count!</button>
        <button onClick={resetTheGame}>Reset the game!</button>
        </>
        
    )
}
