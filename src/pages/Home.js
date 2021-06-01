import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// database
import firebase from '../database/firebaseDB'

function Home() {

    const [loading,setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            firebase.firestore().collection('products')
            .get()
            .then(querySnapshots => {
                // console.log(querySnapshots.docs)
                setProductos(querySnapshots.docs)
                // console.log(productos.map(producto=> producto.id ))
                // console.log(productos.map(producto=> producto.data().name ))
                setLoading(false);
            })

        },
        []
    )

    if(loading) {
        return(
            <div className="d-flex justify-content-center align-item-center h-6">
                <div className="spinner-border m-5 p-3" role="status">
                </div>
            </div>
        )
    } 
    else {
        return (
            <div className="row mb-5">
                {productos.map(producto => 
                    <div className="col-md-6 mb-4" key={producto.id}>
                        <div className="card text-align-center">
                            <div className="card-header p-0">
                                <Link to={`/home/${producto.id}`}>
                                    <img src={producto.data().photo_url} className="imgProductos" alt=""/>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p className="card-title h4"> {producto.data().name} </p>
                                <p className="card-text"> $ {producto.data().price} </p>
                            </div>
                        </div>   
                    </div> 
                )} 
            </div>
        )
    }

}

export default Home