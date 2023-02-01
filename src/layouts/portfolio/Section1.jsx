import React from 'react'
import style from './section.module.css'
import { Link } from 'react-router-dom'
import man1 from '../../images/man1.png'
import aiApp from '../../images/ai app.png'
import figma from '../../images/figma.png'
import designApp from '../../images/designapp.png'
import background from '../../images/portfolio background.svg'
import vector from '../../images/Vector.svg'
import Menu from '../../components/Menu'
import { Icon } from '@iconify/react'
import { useState } from 'react'


export default function Section1() {

    let [openNav, setopenNav] = useState(false)
    
    let displayNav = ()=>{
        setopenNav(!openNav)
    }

    


  return (
    <div className='container'>
         <picture className={style.background}>
                    <img src={background} alt="" />
                </picture>
         <section className={style.headers}>
            <header>Maxwell Chris-Ogar</header>
            <div className={style.menu}>
                <div onClick={displayNav}>{
                openNav ? <div><Icon className='icons'  icon="humbleicons:times" /></div> : <div><Icon className='icons'  icon="material-symbols:menu-rounded" /></div>
              }</div>
                {
                    openNav && <Menu/> 
                }
                
            </div>
            <nav className={style.navs}>
                <button><Link to='/'>Home</Link></button>
                <button>Works</button>
                <button><Link to='/credentials'> Credentials</Link></button>
                <button className={style.contactbtn}>Contact us</button>
            </nav>
        </section>
        <section className={style.section1}>
            <section className={style.container}>
                <div className={style.content}>
                    <h1>Want to bring the Abstract into reality?</h1>
                    <p>That can be achieved through my multi-chemicals of research, analysis and design.</p>
                    <button> <Link to='maxy525@live.co.uk'>Get In Touch</Link></button>
                </div>
                <picture className={style.images}>
                    <picture className={style.man}>
                        <img src={man1} alt="" />
                    </picture>
                    <picture className={style.backG}>
                        <img src={vector} alt="" />
                    </picture>
                </picture>
            </section>
            <section>
                <picture className={style.designicon}>
                    <img src={figma} alt="" />
                    <img src={designApp} alt="" />
                    <img src={aiApp} alt="" />
                </picture>
            </section>
        </section>
    </div>
  )
}
