import React from 'react'
import mobilehand from '../../images/mobile-hand.png'
import style from './section.module.css'

export default function Section5() {
  return (
    <div className='container'>
        <section className={style.section5}>
            <button>See older Projects</button>
            <p>For more work inquiries, email me at maxy525@live.co.uk <br />
                Thank you for Viewing! </p>
                <img src={mobilehand} alt="" />
        </section>
    </div>
  )
}
