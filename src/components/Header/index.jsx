import React from 'react'
import 'boxicons'
import './style_header.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { useContext } from 'react'

export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu

  const toogleMenu = () =>{
    setMenu(!menu)
  }

  return (
    <header>
        <Link to="/">
          <div className='logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/a6/20210213141552%21Logo_NIKE.svg/120px-Logo_NIKE.svg.png" alt="logo" />
          </div>
        </Link>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>        
      </ul>
      <div className='carrinho' onClick={toogleMenu}>
        <box-icon name='cart'></box-icon>
        <span className='itens-no-carrinho'>0</span>
      </div>
    </header>
  )
}
