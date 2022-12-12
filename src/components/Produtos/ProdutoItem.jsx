import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

export const ProdutoItem = ({
  id,
  title,
  price,
  image,
  category
}) => {

  const value = useContext(DataContext);
  const addCarrinho = value.addCarrinho

  return (
    <div className='produto'>
        <a href="/">
          <div className='produto_imagem'>
           <img src={image} alt={title} width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1> {title} </h1>
          <p> {category} </p>
          <p className='preço'> {price} </p>
        </div>
        <div className='buttom'>
          <button className='btn' onClick={() => addCarrinho(id)}>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>     
  )
}
