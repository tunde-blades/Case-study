import React from 'react'
import style from './section.module.css'
import justlogo from '../../images/justbill logo.png'
import justimage from '../../images/justbill image.png'

export default function Section1() {
  return (
    <div className='container'>
        <section className={style.section1}>
            <section className={style.section1box}>
                <div className={style.logohead}>
                    <img src={justlogo} alt="" />
                    <h3>Utility Payment web Application</h3>
                    <p>A UX Case Study</p>
                </div>
                <picture className={style.justimage}>
                    <img  src={justimage} alt="" />
                </picture>
            </section>
            <section className={style.content}>
                <div>
                    <h3>Problem statement</h3>
                    <small>paying for bills involves an individual have to go through the whole process of signing up. if there was an easier way of paying for bills without stressor being bored using an application, people will prefer it</small>
                </div>
                <div>
                    <h4>Objectives and Goals</h4>
                    <small>
                        <ol>
                            <li>1. Efficient ond fast woy to poy utility bills</li>
                            <li>2. Ability for opplicotion to remember users</li>
                            <li>3.System thot is secured for poyments</li>
                        </ol>
                    </small>
                </div>
                <div>
                    <h5>Challenges</h5>
                    <small>
                        <ol>
                            <li>1. Security of the users information</li>
                            <li>2. Unnecessery charges from service providers.</li>
                        </ol>
                    </small>
                </div>
            </section>
        </section>
    </div>
  )
}
