import React from 'react'
import style from './section.module.css'
import mobile1 from '../../images/mobile1.png'
import linkedinlogo from '../../images/LinkedIn logo.svg'
import behancelogo from '../../images/behance logo.svg'
import dribblelogo from '../../images/dribbble logo.svg'

export default function Section2() {
  return (
    <div>
        <section className={style.section2}>
            <section className={style.trustee}>
                <picture>
                    <img src={linkedinlogo} alt="" />
                    <img src={dribblelogo} alt="" />
                    <img src={behancelogo} alt="" />
                </picture>
            </section>
            <section className={style.servicebox}>
                <picture className={style.mobile}>
                    <img src={mobile1} alt="" />
                </picture>
                <section className={style.service}>
                    <h3>My Services</h3>
                    <p>uI/uX design</p>
                    <small>user interface design <br /> building Wireframes. <br /> Content strategy. <br /> creating Information architecture. <br /> Brand and design system development. <br /> Design technology consulting</small> <br/>
                    <div className={style.btns}>
                        <button className={style.credentials}>See Credentials</button>
                        <button className={style.resume}>Download Resume</button>
                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}
