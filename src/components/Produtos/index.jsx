import React from 'react'
import './style_produtos.css'
import { DataContext } from '../../context/DataProvider'
import { useContext } from 'react'
import { ProdutoItem } from './ProdutoItem'

export const ProdutosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  return (
    <>
    <h1 className='titulo'>Produtos</h1>
    <div className='produtos'>
      {
        productos.map(producto =>(
          <ProdutoItem 
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          image={producto.image}
          category={producto.category}
          cantidad={producto.cantidad}
          />
        ))
      }
    </div>
    </>
  )
}
