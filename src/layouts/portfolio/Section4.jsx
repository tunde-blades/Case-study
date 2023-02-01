import React from 'react'
import style from './section.module.css'
import mobilelist from '../../images/mobilelist.jpg.png'
import logo from '../../images/necta logo.png'
import {Link} from 'react-router-dom'


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
                    <li>Sending money</li>
                    <li>Paying Bills</li>
                    <li>taking loan</li>
                    <li>saving money</li>
                </ul>
                <div className={style.btns}>
                    <button className={style.figmabtn}><Link to='https://www.figma.com/file/BZl2V4VmFAWj2VrNokgfpp/FINTECH?node-id=0%3A1&t=ptjCThJ5kPFug1dG-1'>Figma file</Link></button>
                    <button className={style.casebtn}>Case study</button>
                </div>
            </div>
        </section>
    </div>
  )
}
