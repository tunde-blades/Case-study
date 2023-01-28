import React from 'react'
import style from './section.module.css'
import logilogo from '../../images/logi logo.png'
import logiimage from '../../images/logi mobile1.png'

export default function Section1() {
  return (
    <div className='container'>
        <section className={style.section1}>
            <section className={style.section1box}>
                <div className={style.logohead}>
                    <img src={logilogo} alt="" />
                    <h3>Delivery Service <br /> Mobile Application</h3>
                    <h5>A UX Case Study</h5>
                </div>
                <picture className={style.justimage}>
                    <img  src={logiimage} alt="" />
                </picture>
            </section>
            <section className={style.content}>
                <div>
                    <h3>Problem statement</h3>
                    <small>When people need to send parcel to others, the trafic in lagos makes sure the ackages arrives late, they want to be able to send these items with ease, also ensuring the items reach the recepient on time.</small>
                </div>
                <div className={style.objectives}>
                    <h4>Objectives and Goals</h4>
                    <small>
                        <ol>
                            <li>Time efficiency way to send items</li>
                            <li>ability to track packages enroute to destination</li>
                            <li>riders application to recieve request</li>
                            <li>admin portal to manage both application</li>
                        </ol>
                    </small>
                </div>
            </section>
        </section>
    </div>
  )
}
