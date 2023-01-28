import React from 'react'
import gokada from '../../images/gokada logo.svg'
import kwik from '../../images/kwik logo.svg'
import style from './section.module.css'

export default function Section4() {
  return (
    <div className='container' id={style.section4}>
        <h3 className={style.competehead}>Our Competitors</h3>
        <section className={style.competebox}>
            <div className={style.utilbox}>
                <img src={gokada} alt="" />
                <div className={style.box}>
                    <h4>Features</h4>
                    <ol>
                        <li>No sign up Required</li>
                        <li>Saves time</li>
                        <li>Extra charges applied</li>
                        <li>Not secured because phone number is stored </li>
                        <li>Must always link card</li>
                    </ol>
                </div>
            </div>
            <div className={style.jumiabox}>
                <div className={style.box}>
                    <h4>Features</h4>
                    <ol>
                        <li>Requires Sign up</li>
                        <li>Tedious Process</li>
                        <li>Extra charges applied</li>
                        <li>Secured </li>
                        <li>Linking of card is done only once</li>
                    </ol>
                </div>
                 <img src={kwik} alt="" />
            </div>
        </section>
    </div>
  )
}
