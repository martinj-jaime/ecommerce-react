import React, { useState } from "react"
import firebase from '../database/firebaseDB'
import { useHistory } from 'react-router-dom'

function SignUp() {

    const [form, setForm] = useState({nombre:'', apellido:'', email:'', password:''})
    // firebase validation
    let [error, setError] = useState('');
    // personal validation
    let [error1, setError1] = useState([]);

    const history = useHistory()

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(form)
        // Personal Validation
        if(form.nombre === '') {
            error1.push({ message: 'Please Write a Name' })
        }
        if(form.apellido === '') {
            error1.push({ message: 'Please Write a Surname' })
        } 
        // console.log(error1)
        // Firebase Validation
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then(res => {
            console.log(res)
            console.log(res.user.uid)
            // Save User
            firebase.firestore().collection("users").add({
                name: form.nombre,
                surname: form.apellido,
                email: form.email,
                userId: res.user.uid
            })
            .then(res => {
                // console.log(res);
                history.push('/login')
            })
            .catch(err => {
                // console.log(err.message)
                setError(err)
            })
        }) 

        .catch(err => {
            // console.log(err.message)
            setError(err)
        })

    }

    const handleInputChange = e =>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    return(
        <div>
        {/* Personal Validation Alert */}
        {
            error1.map( ({message}) => (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {message}
                <button type="button" className="btn btn-close" data-bs-dismiss="alert" 
                aria-label="Close" style={{ right: 0, top: 0 , position: "absolute", boxSizing: 'content-box' }}>
                <i className="fas fa-times fa-2x"></i>
                </button>
            </div>
            ))
        }
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
                <div className="card-header h3">
                    Account Register
                </div>
                <div className="card-body">

                {/* Formulario */}
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre"
                    name="nombre" value={form.nombre} onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Apellido"
                    name="apellido" value={form.apellido} onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"
                    name="email" value={form.email} onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                    <input type="current-password" className="form-control" placeholder="Password"
                    name="password" value={form.password} onChange={handleInputChange}></input>
                </div>
                <div className="form-group"> 
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </div>
                </form>

                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;