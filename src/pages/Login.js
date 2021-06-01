import React, { useState, useContext } from 'react'
import firebase from '../database/firebaseDB'
import { useHistory } from 'react-router-dom'
import GlobalContext from '../Context/Global/GlobalContext'

function Login() {

    const [form, setForm] = useState({email: '', password: ''})
    let [error, setError] = useState('');
    const history = useHistory()
    const context = useContext(GlobalContext)

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(form)
        //
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            // console.log(res)
            context.loginUser()
            history.push('/')
        })
        .catch(err => {
            // console.log(err.message)
            setError(err)
        })
    }

    const handleInputChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div>
        {/* Firebase Validation Alert */}
        {
            error.message &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error.message}
                    <button type="button" className="btn btn-close" data-bs-dismiss="alert" 
                    aria-label="Close" style={{ right: 0, top: 0 , position: "absolute", boxSizing: 'content-box' }}>
                    <i className="fas fa-times fa-2x"></i>
                    </button>
                </div>
        }
        {/*  */}
        <div className="col-md-4 mx-auto">
        <div className="card text-center">

            <div className="card-header">
                <h2>Account Login</h2>
                <img src="/logo192.png" className="logo" alt="..." />
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="form-group mt-1">
                        <input type="email" name="email" 
                        className="form-control"
                        placeholder="Email" autoFocus 
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="password"
                        className="form-control"
                        placeholder="Password" autoFocus 
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-primary">
                        SigIn
                        </button>
                    </div>
                </form>
            </div>

        </div>
        </div>
        </div>
    )

}

export default Login