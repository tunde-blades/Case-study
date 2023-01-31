import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import style from './section.module.css'
import {useState} from 'react'

export default function Header() {

    let [openNav, setopenNav] = useState(false)
    
    let displayNav = ()=>{
        setopenNav(!openNav)
    }


  return (
    <div>
        <section className={style.headers}>
            <header>Maxwell Chris-Ogar</header>
             <div className={style.menu}>
              <button onClick={displayNav}>{
                openNav ? <div>cancel</div> : <div>open</div>
              }</button>
                {
                    openNav && <Menu/> 
                }
            </div>
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
