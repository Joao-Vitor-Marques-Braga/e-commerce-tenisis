import React, { useContext } from 'react'
import './style.css'
import {  DataContext  } from '../../context/DataProvider'

export const Carrinho = () => {
    const value =useContext(DataContext)
    const [menu, setMenu] = value.menu

    const tooglefalse = ()=>{
        setMenu(false);
    }

    const show1 = menu ? "carrinho show" : "carrinhos"
    const show2 = menu ? "carrinho show" : "carrinho"
    
  return (
    <div className={show1}>
        <div className={show2}>
            <div className='fechar_carrinho' onClick={tooglefalse}>
                <box-icon name='x'></box-icon>
            </div>
        <h2>Seu Carrinho</h2>
        <div className='centro_carrinho'>
            <div className='item_carrinho'>
                <img src="https://imgnike-a.akamaihd.net/360x360/02286051.jpg" alt="" width={250} />
                <div>
                    <h3>Tênis Nike City Rep TR Masculino</h3>
                    <p className='preço'>R$:345</p>
                </div>
                <div>
                    <box-icon name='up-arrow' type='solid'></box-icon>
                    <p className='quantidade'>1</p>
                    <box-icon name='down-arrow'></box-icon>
                </div>
                <div className='remover_item'>
                    <box-icon name='trash'></box-icon>
                </div>
            </div>
        </div>
        <div className='carrinho_footer'>
            <h3>Total R$:345</h3>
            <button className='btn'>Forma de Pagamento</button>
        </div>
        </div>
    </div>
  )
}
