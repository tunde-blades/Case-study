import React from 'react'
import { Link } from 'react-router-dom'
import style from './section.module.css'

export default function Header() {
  return (
    <div>
        <section className={style.headers}>
            <header>Maxwell Chris-Ogar</header>
            <nav className={style.navs}>
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/payments'>Works</Link></button>
                <button><Link to='/credentials'> Credentials</Link></button>
                <button className={style.contactbtn}>Contact</button>
            </nav>
        </section>
    </div>
  )
}