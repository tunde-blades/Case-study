import React from 'react'
import icon1 from '../../images/log icon1.svg'
import icon3 from '../../images/log icon 3.svg'
import icon4 from '../../images/log icon 4.svg'
import style from './section.module.css'
import logimage from '../../images/log image1.png'
import logimage2 from '../../images/log image2.png'

export default function Section2() {
  return (
    <div className='container' id={style.section2}>
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
        <div className={style.challenge}>
          <h4>Challenges</h4>
          <small>
              <ol>
                  <li>Security of the users packages</li>
                  <li>verification of users.</li>
                  <li>verification of riders</li>
                  <li>ensuring recipient gets package</li>
              </ol>
          </small>
      </div>
        <section className={style.productbody}>
          <div className={style.product}>
            <div className={style.productbox}>
              <div className={style.content}>
                <h3>our product users</h3>
                <p>Our target audience is the working population <span>age 18-60</span> within lagos state</p>
              </div>
            <img src={logimage} alt="" />
          </div>
            <picture className={style.floatimg}>
               <img src={logimage2} alt="" />
            </picture>
          </div>
        </section>
    </div>
  )
}
