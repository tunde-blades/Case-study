import React from 'react'
import mobilehand from '../../images/mobile-hand.png'
import vectorbelow from '../../images/Vectorbelow.png'
import style from './section.module.css'

export default function Section5() {
  return (
    <div className='container'>
        <section className={style.section5}>
            <button>See older Projects</button>
            <p>For more work inquiries, email me at maxy525@live.co.uk <br />
                Thank you for Viewing! </p>
                <div className={style.imagebox}>
                  <picture className={style.image}>
                    <img src={mobilehand} alt="" />
                  </picture>
                  <picture className={style.floatimage}>
                    <img src={vectorbelow}/>
                  </picture>
                </div>
        </section>
    </div>
  )
}
