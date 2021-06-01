import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../Context/Global/GlobalContext'

function Navigation() {
    return (
        <GlobalContext.Consumer>
            {
                context =>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container">
                                <div className="container-fluid row">
                                    <Link className="navbar-brand text-primary h2 m-0" to="/">
                                        <img src="/logo192.png" alt=".." width="50" height="50" /> Home
                                    </Link>

                                    <button className="navbar-toggler" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <ul className="navbar-nav justify-content-end collapse navbar-collapse" id="navbarNav">
                                        {
                                            context.userLogin &&
                                            <>
                                            <div className="dropdown">
                                                <button className="btn btn-dark dropdown-toggle" type="button" 
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fas fa-user"></i>
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <a className="dropdown-item"
                                                        onClick={() => context.logoutUser(false)}
                                                        >Salir</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            </>
                                        }
                                        {
                                            !context.userLogin &&
                                            <>
                                            <Link className="nav-link" to="/login">
                                            LogIn
                                            </Link>
                                            <Link className="nav-link" to="/signup">
                                            SignUp
                                            </Link>
                                            </>
                                        }
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
            }
        </GlobalContext.Consumer>
    )
}

export default Navigation