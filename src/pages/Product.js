import React, { useState, useEffect } from 'react'
// database
import firebase from '../database/firebaseDB'

function Product(props) {

    const id = props.id

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    const [mensaje, setMensaje] = useState('');

    useEffect(
        () => {
            firebase.firestore().doc("products/"+id)
            .get()
            .then(doc=> {
                // console.log(doc)
                // console.log(doc.data())
                setProducto(doc.data())
                setLoading(false);
            })

        },
        []
    )

    if (loading) {
        return(
            <div className="d-flex justify-content-center align-item-center h-6">
                <div className="spinner-border m-5 p-3" role="status">
                </div>
            </div>
        )
    } else {
        return(
            <div>
            {
                mensaje &&
                <>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {mensaje}
                    <button type="button" className="btn btn-close" data-bs-dismiss="alert" 
                    aria-label="Close" style={{ right: 0, top: 0 , position: "absolute", boxSizing: 'content-box' }}>
                    <i className="fas fa-times fa-2x"></i>
                    </button>
                </div>
                </>
            }
    
           <div className="row border border-3 border-dark">
                <div className="col">
                    <img src={ producto.photo_url } className="imgProducto" alt=""/>
                </div>
                <div className="col border border-3 border-dark bg-white">
                    <h3 className="mt-2"> {producto.name} </h3>
                    <p className="h2 text-success"> $ {producto.price} </p>
                    <p> { producto.description } </p>
                    <p> Stock: { producto.stock } </p>
                    <button className="btn btn-success" onClick={() => setMensaje('Gracias por su compra')} >
                        Buy
                    </button>
                </div>
           </div>
           </div>
        )
    }

}

export default Product