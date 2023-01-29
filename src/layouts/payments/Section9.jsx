import React from 'react'
import flow4 from '../../images/Flow 4.png'
import style from './section.module.css'

export default function Section9() {
  return (
    <div className='container'>
        <section className={style.section9}>
            <h3>User journey</h3>
            <section>
                <div>
                    <h5>Scenario 1:</h5>
                    <p>Customer wants to gain access to app</p>
                </div>
                <picture>
                    <img src={flow4} alt="" />
                </picture>
            </section>

        </section>
    </div>
  )
}
