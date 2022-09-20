import React from "react";
import './Item.css';
import { useState,useEffect } from "react";




const Item = () => {
    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])

    
    const buscarProductos = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
            const data = await response.json();
            setProductos(data.results);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        buscarProductos()
    }, [])




    return (
        
        productos.map((producto, index) => {
            
                return (
                    <div key={index}>
                        <h3>{producto.title}</h3>
                        <img src={producto.thumbnail} alt="" />
                        <p>{producto.price}$</p>
                        <p>{producto.available_quantity} Unidades disponibles</p>
                        <div>
                            <button onClick={() => {
                                setCarrito([...carrito, producto]);
                                console.log(carrito)
                            }}>Agregar al Carrito</button>
                        </div>
                    </div>
                )
        })
            
    )
    
}

export default Item;