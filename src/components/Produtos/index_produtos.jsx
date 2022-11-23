import React from 'react'
import './style_produtos.css'

export const ProdutosLista = () => {
  return (
    <>
    <h1 className='titulo'>Produtos</h1>
    <div className='produtos'>
      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/768x768/01380251.jpg" alt="tenis1" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:999,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/0120867T.jpg" alt="tenis2" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:599,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/02211851.jpg" alt="tenis3" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:399,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>  

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/01065051.jpg" alt="tenis4" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:1299,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/01113751.jpg" alt="tenis5" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:799,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/022862ID.jpg" alt="tenis6" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:539,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>

      <div className='produto'>
        <a href="#">
          <div className='produto_imagem'>
           <img src="https://imgnike-a.akamaihd.net/360x360/0223177T.jpg" alt="tenis7" width={400}/>
          </div>
        </a>
        <div className='footer_produtos'>
          <h1>Titulo</h1>
          <p>Categoria</p>
          <p className='preço'>R$:749,99</p>
        </div>
        <div className='buttom'>
          <button className='btn'>
            Adicionar ao Carrinho
          </button>
          <div>
            <a href="#" className='btn'>Ver produto</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
