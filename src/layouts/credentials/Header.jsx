import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import style from './section.module.css'
import {useState} from 'react'
import { Icon } from '@iconify/react'
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
               <div className='icons' onClick={displayNav}>{
                openNav ? <div><Icon icon="humbleicons:times" /></div> : <div><Icon icon="material-symbols:menu-rounded" /></div>
              }</div>
                {
                    openNav && <Menu/> 
                }
            </div>
            <nav className={style.navs}>
                <button><Link to='/'>Home</Link></button>
                <button>Works</button>
                <button><Link to='/credentials'> Credentials</Link></button>
                <button className={style.contactbtn}>Contact</button>
            </nav>
        </section>
    </div>
  )
}
