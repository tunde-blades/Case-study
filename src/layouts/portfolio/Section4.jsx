import React from 'react'
import style from './section.module.css'
import mobilelist from '../../images/mobilelist.png'
import logo from '../../images/necta logo.png'


export default function Section4() {
  return (
    <div className='container'>
        <section className={style.section4}>
            <img src={mobilelist} alt="" />
            <div className={style.content}>
                <span>
                    <img src={logo} alt="" /> 
                    <div>
                        <h5>Necta Bank</h5>
                        <small>mobile</small>
                    </div>
                </span>
                <small>
                    Necta bank enables users to conveniently perform banking functions like
                </small>
                <ul>
                    <li></li>
                </ul>
                <div className={style.btns}>
                    <button className={style.figmabtn}>Figma file</button>
                    <button className={style.casebtn}>Case study</button>
                </div>
            </div>
        </section>
    </div>
  )
}
