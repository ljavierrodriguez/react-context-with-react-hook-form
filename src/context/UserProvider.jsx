import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [userStore, setUserStore] = useState({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
    })

    const [userActions] = useState({
        login: () => null,
        logout: () => null
    })

    useEffect(() => {

    }, [])

    return (
        <UserContext.Provider value={{ userStore, userActions }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider