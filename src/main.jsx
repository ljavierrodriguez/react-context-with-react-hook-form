import React from 'react'
import ReactDOM from 'react-dom/client'

import Rutas from './Rutas'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import GlobalContext from './context/GlobalContext'
import UserProvider, { UserContext } from './context/UserProvider'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <GlobalContext>
        <UserProvider>
            <Rutas />
        </UserProvider>
    </GlobalContext>
)