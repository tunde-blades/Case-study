import React from 'react'
import style from './section.module.css'
import mobile2 from '../../images/mobile2.png'
import mobile3 from '../../images/mobile3.png'
import mobile4 from '../../images/mobile4.png'
import logo from '../../images/necta logo.png'

export default function Section3() {
  return (
    <div>
        <section className={style.section3}>
           <div className={style.projectHead}>
             <h4>Projects </h4>
            <div className={style.underline}></div>
           </div>
            <section>
                <div className={style.box}>
                        <img className={style.mobile2} src={mobile2} alt="" />
                    <div className={style.content}>
                        <span>
                            <img src={logo} alt="" /> 
                            <div>
                                <h5>Pwan Logistics app</h5>
                                <small>mobule</small>
                            </div>
                        </span>
                        <small className={style.contentText}>Product that helps user send items within 
                            the city with a convenient fee
                        </small>
                        <button className={style.figmabtn}>Figma file</button>
                        <button className={style.casebtn}>Case study</button>
                    </div>
                </div>
                 <div className={style.box}>
                        <img className={style.mobile3} src={mobile3} alt="" />
                     <div className={style.content}>
                        <span>
                            <img src={logo} alt="" /> 
                            <div>
                                <h5>Pwan Logistics app</h5>
                                <small>mobile</small>
                            </div>
                        </span>
                        <small className={style.contentText}>Product that helps user send items within 
                            the city with a convenient fee
                        </small>
                        <button className={style.figmabtn}>Figma file</button>
                        <button className={style.casebtn}>Case study</button>
                    </div>
                </div>
                 <div className={style.box}>
                        <img className={style.mobile4} src={mobile4} alt="" />
                     <div className={style.content}>
                        <span>
                            <img src={logo} alt="" /> 
                            <div>
                                <h5>Pwan Logistics app</h5>
                                <small>mobule</small>
                            </div>
                        </span>
                        <small className={style.contentText}>Product that helps user send items within 
                            the city with a convenient fee
                        </small>
                        <button className={style.figmabtn}>Figma file</button>
                        <button className={style.casebtn}>Case study</button>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
