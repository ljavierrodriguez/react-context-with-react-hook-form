import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const GlobalContext = ({ children }) => {

    const [store, setStore] = useState({
        count: 0,
    })
    const [actions] = useState({
        increment: () => setStore((store) => ({ ...store, count: store.count + 1 })),
        decrement: () => setStore((store) => ({ ...store, count: store.count - 1 })),
        login: (data) => {
            console.log(data)
        }
    })

    useEffect(() => {

    }, [])

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
}

export default GlobalContext