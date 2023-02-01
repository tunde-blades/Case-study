import React from 'react'
import style from './menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <nav className={style.mobilenavs}>
                <button><Link to='/'>Home</Link></button>
                <button>Works</button>
                <button><Link to='/credentials'> Credentials</Link></button>
                <button className={style.contactbtn}>Contact us</button>
            </nav>
    </div>
  )
}
