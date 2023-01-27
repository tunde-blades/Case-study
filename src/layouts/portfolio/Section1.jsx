import React from 'react'
import style from './section.module.css'
import Header from '../../components/Header'
import man1 from '../../images/man1.png'
import aiApp from '../../images/ai app.png'
import figma from '../../images/figma.png'
import designApp from '../../images/designapp.png'

export default function Section1() {
  return (
    <div>
        <Header/>
        <section className={style.section1}>
            <section className={style.container}>
                <div className={style.content}>
                    <h1>Want to bring the Abstract into reality?</h1>
                    <p>That can be achieved through my multi-chemicals of research, analysis and design.</p>
                    <button>Get In Touch</button>
                </div>
                <picture>
                    <img src={man1} alt="" />
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
