import { useEffect, useState } from "react";
import { createContext } from "react";
import Data from './Data.js'

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrinho, setCarrinho] = useState([])

    useEffect(() =>{
        const producto = Data.items
        if (producto){
            setProductos(producto)
        } else{
            setProductos([])
        }
        setProductos(producto)
    },[])

    const addCarrinho = (id) =>{
        const check = carrinho.every(item =>{
            return item.id !== id;
        })
        if (check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrinho([...carrinho, ...data])
        } else{
            alert('O produto foi adicionado ao carrinho')
        }
    }

    useEffect(() =>{
        const dataCarrinho = JSON.parse(localStorage.getItem('dataCarrinho')
        )
        if(dataCarrinho){
            setCarrinho(dataCarrinho)
        }
    }, [])

    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrinho: addCarrinho,
        carrinho: [carrinho, setCarrinho]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}