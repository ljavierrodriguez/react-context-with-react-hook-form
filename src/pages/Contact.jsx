import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../context/GlobalContext'

const Contact = () => {

    const { store, actions } = useContext(Context)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const enviarEmail = (data) => {
        actions.login(data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form className="w-50 mx-auto my-5 py-4" onSubmit={handleSubmit(enviarEmail)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id='name' {...register('name', { required: 'This field is required' })}
                                className={`form-control mb-3 ${(errors?.name ? 'is-invalid' : '')}`} placeholder='Insert Name' />
                            <small className="invalid-feedback">{errors?.name?.message}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id='email' {...register('email', { 
                                required: 'This field is required', 
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Email is invalid'
                                }
                            })}
                                className={`form-control mb-3 ${(errors?.email ? 'is-invalid' : '')}`} placeholder='Insert Name' />
                            <small className="invalid-feedback">{errors?.email?.message}</small>
                        </div>
                        <button className="btn btn-primary btn-sm">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact