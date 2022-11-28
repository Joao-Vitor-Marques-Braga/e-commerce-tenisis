import React from 'react'
import { Header } from '../../components/Header/index'
import './style.css'

export const Administrador = () => {
  return (
    <div>
        <Header/>
        <div className='informações_do_produto'>
            <div className='titulo'>
            <h1>Cadastrar novo produto</h1>
            </div>
            <div className='informações_do_produto_final'>
                <h2>Nome do Produto:</h2>
                <input type="text" name="nome" id="nome" placeholder='Nome do Produto:'/>
                <h2>Categoria do produto</h2>
                <select name="categoria" id="cat">
                    <option value="">Casual</option>
                    <option value="">Corrida</option>
                    <option value="">Chuteira</option>
                    <option value="">Basquete</option>
                    <option value="">Treino & Academia</option>
                </select>
                <h2>Valor do produto</h2>
                <input type="text" placeholder='Valor do Produto:'/>
            </div>
        </div>
        <div>
            <button className='btn-cadastrar'>Cadastrar produto</button>
        </div>
    </div>
  )
}
