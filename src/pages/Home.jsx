import React, { useContext } from 'react'
import { Context } from '../context/GlobalContext'

const Home = () => {

    const state = useContext(Context)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Count: {state?.store?.count}</p>
                    <button className="btn btn-primary btn-sm" onClick={state.actions.increment}>
                        <i className="bi bi-plus"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={state.actions.decrement}>
                        <i className="bi bi-dash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home