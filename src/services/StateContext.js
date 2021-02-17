import { createContext, useContext, useReducer, useEffect } from 'react'

const initialState = {
    value: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return {value: state.value++}
        break;
        
        case 'decrease':
            return {value: state.value--}
        break;
    }

    return state
}

const localState = JSON.parse(localStorage.getItem('ctx'))


export const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, localState || initialState)

    useEffect(() => {
        localStorage.setItem('ctx', JSON.stringify(state))
    }, [state])

    return (
        <StateContext.Provider value={[state, dispatch]}>
            { children }
        </StateContext.Provider>
    )
}

export const useState = () => useContext(StateContext)

