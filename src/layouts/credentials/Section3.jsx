import React from 'react'
import style from './section.module.css'
import cert1 from '../../images/certificate1.png'
import cert2 from '../../images/certificate2.png'
import cert3 from '../../images/certificate3.png'

export default function Section3() {
  return (
    <div className='container'>
        <section className={style.certificate}>
            <h3 className={style.courseC}>course Certificates</h3>
            <section className={style.certlist}>
                <div>
                    <h3>Building Wireframes And Low Fidelity Frames</h3>
                    <img src={cert1} alt="" />
                </div>
                <div>
                    <h3>Emphasize, Define And Ideate</h3>
                    <img src={cert2} alt="" />
                </div>
                 <div>
                    <h3>Foundations Of A User Experience (UX) Design</h3>
                    <img src={cert3} alt="" />
                </div>
            </section>
        </section>
    </div>
  )
}
