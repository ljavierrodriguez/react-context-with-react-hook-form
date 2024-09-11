import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const GlobalContext = ({ children }) => {

    const [store, setStore] = useState({
        count: 0,
        users: null,
        posts: null,
    })
    const [actions] = useState({
        increment: () => setStore((store) => ({ ...store, count: store.count + 1 })),
        decrement: () => setStore((store) => ({ ...store, count: store.count - 1 })),
        login: (data) => {
            console.log(data)
        },
        getUsers: () => {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseJson) => setStore((store) => ({ ...store, users: responseJson })))
                .catch((error) => console.log(error.message))
        },
        getPosts: () => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseJson) => setStore((store) => ({ ...store, posts: responseJson })))
                .catch((error) => console.log(error.message))
        }
    })

    useEffect(() => {
        actions.getUsers()
    }, [])

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
}

export default GlobalContext