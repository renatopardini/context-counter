import { useState } from '../../services/StateContext'

const Counter = () => {
    const [ state, dispatch ] = useState()

    const handleIncrease = () => {
        dispatch({type: 'increase'})
    }
    const handleDecrease = () => {
        dispatch({type: 'decrease'})
    }

    return (
        <>
            <p>Count: {state.value}</p>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </>
    )
}

export default Counter