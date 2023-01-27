import React from 'react'
import icon1 from '../../images/log icon1.svg'
import icon3 from '../../images/log icon 3.svg'
import icon4 from '../../images/log icon 4.svg'
import style from './section.module.css'
import jbimage from '../../images/jb image1.png'
import jbimage2 from '../../images/jb image2.png'

export default function Section2() {
  return (
    <div className='container'>
        <section className={style.process}>
          <h3>Our Process</h3>
          <div className={style.processicon}>
            <picture>
              <img src={icon1} alt="" />
              <h6>Brainstom</h6>
            </picture>
            <picture>
              <img src={icon3} alt="" />
              <h6>Define</h6>
            </picture>
            <picture>
              <img src={icon3} alt="" />
              <h6>Ideate</h6>
            </picture>
            <picture>
              <img src={icon4} alt="" />
              <h6>Design</h6>
            </picture>
          </div>
        </section>
        <section className={style.product}>
          <h3>our product users</h3>
          <div className={style.productbox}>
            <img src={jbimage} alt="" />
            <picture className={style.floatimg}>
               <img src={jbimage2} alt="" />
            </picture>
            <div className={style.content}>
              <p>Our target population includes people between <br /> <span>age 13-65</span> nation wide</p>
            </div>
          </div>
        </section>
    </div>
  )
}
