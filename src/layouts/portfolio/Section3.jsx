import React from 'react'
import style from './section.module.css'
import mobile2 from '../../images/mobile2.png'
import mobile3 from '../../images/mobile3.png'
import mobile4 from '../../images/mobile4.png'
import logo from '../../images/necta logo.png'
import {Link} from 'react-router-dom'

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
                                <small>mobile</small>
                            </div>
                        </span>
                        <small className={style.contentText}>Product that helps user send items within 
                            the city with a convenient fee
                        </small>
                        <button className={style.figmabtn}>Figma file</button>
                        <button className={style.casebtn}> <Link to = '/logistics'>Case study</Link> </button>
                    </div>
                </div>
                 <div className={style.box}>
                        <img className={style.mobile3} src={mobile3} alt="" />
                     <div className={style.content}>
                        <span>
                            <img src={logo} alt="" /> 
                            <div>
                                <h5>Justbill.ng</h5>
                                <small>web</small>
                            </div>
                        </span>
                        <small className={style.contentText}>This product enables users to conviniently pay for bils online without having to login
                        </small>
                        <button className={style.figmabtn}>Figma file</button>
                        <button className={style.casebtn}><Link to = '/payments'>Case study</Link> </button>
                    </div>
                </div>
                 <div className={style.box}>
                        <img className={style.mobile4} src={mobile4} alt="" />
                     <div className={style.content2}>
                        <span>
                            <div>
                                <h5>Pwan buy to sell</h5>
                                <small>website</small>
                            </div>
                            <small>An investment website</small>
                        </span>
                        <button className={style.figmabtn}>Figma file</button>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
