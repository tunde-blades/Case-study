import React from 'react'
import style from './menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <nav className={style.mobilenavs}>
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/payments'>Works</Link></button>
                <button><Link to='/credentials'> Credentials</Link></button>
                <button className={style.contactbtn}><Link to='/logistics'>Logistics</Link></button>
            </nav>
    </div>
  )
}
