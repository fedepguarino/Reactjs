import { useState, useEffect  } from 'react'
import Container from 'react-bootstrap/Container'

import data from "../data/productos.json"

export const ItemListContainer = props => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) =>{
            setTimeout(() => {
                resolve(data)
            }, 2000)
            
        })

        promesa.then(result => setProductos(result))
    }, [])

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            {productos.length === 0 ? (
                <div>Cargando...</div>
            ):( 
                productos.map(producto => (
                    <div key={producto.id}>{producto.titulo}</div>
                ))
            )
        </Container>
    
}