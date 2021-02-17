import { useState } from '../../services/StateContext'

const Mirror = () => {
    const [ state ] = useState()

    return (
        <p>Mirror: {state.value}</p>
    )
}

export default Mirror