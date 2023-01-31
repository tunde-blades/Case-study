import React from 'react'
import style from './section.module.css'
import flow1 from '../../images/Flow 1.svg'
import flow2 from '../../images/Flow 2.svg'
import flow3 from '../../images/Flow 3.svg'

import wireframe1 from '../../images/log image3.png'
import wireframe2 from '../../images/log image4.png'
import wireframe3 from '../../images/log image5.png'

import wireframe4 from '../../images/log image6.png'
import wireframe5 from '../../images/log image7.png'
import wireframe6 from '../../images/log image8.png'
import wireframe7 from '../../images/log image9.png'
import wireframe8 from '../../images/log image10.png'
import wireframe9 from '../../images/log image11.png'

import wireframe10 from '../../images/log image12.png'


export default function Section9() {
  return (
    <div className='container'>
        <section className={style.section9}>
            <h1>User journey</h1>
            <section>
                <h4>scenerio 1:</h4>
                <p>Customer wants to gain access to the app</p>
                <picture>
                    <img src={flow1} alt="" />
                </picture>
            </section>
             <section>
                <h4>scenerio 2:</h4>
                <p>Customer wants to send package</p>
                <picture>
                    <img src={flow2} alt="" />
                </picture>
            </section>
             <section>
                <h4>scenerio 2:</h4>
                <p>Customer wants to track a delivery</p>
                <picture>
                    <img src={flow3} alt="" />
                </picture>
            </section>
        </section>
        <section className={style.wireframing}>
            <h3>Wireframing</h3>
            <picture>
                <img src={wireframe1} alt="" />
                  <img src={wireframe2} alt="" />
                    <img src={wireframe3} alt="" />
            </picture>
           <section className={style.paperwire}>
                 <h3>Paper wireframe</h3>
            <picture>
                <img src={wireframe4} alt="" />
                <div className={style.content}>
                    <p>Signup Screen</p>
                    <p>Create Password</p>
                    <p>Login Screen</p>
                </div>
            </picture>
             <picture>
                <img src={wireframe5} alt="" />
                <div className={style.content}>
                    <p>Home screen</p>
                    <p>Send item</p>
                    <p>Recipients details</p>
                </div>
            </picture>
            <picture>
                <img src={wireframe6} alt="" />
                <div className={style.content}>
                    <p>Payment</p>
                    <p>Searching rider</p>
                    <p>Confirm rider</p>
                </div>
            </picture>
             <picture>
                <img src={wireframe7} alt="" />
                <div className={style.content}>
                    <p>Rider arrived</p>
                    <p>Drop off</p>
                    <p>Rate rider</p>
                </div>
            </picture>
            <picture>
                <img src={wireframe8} alt="" />
                <div className={style.content}>
                    <p>Track delivery</p>
                    <p>Tracking delivery</p>
                    <p>Profile</p>
                </div>
            </picture>
             <picture>
                <img src={wireframe9} alt="" />
                <div className={style.content}>
                    <p>Add card</p>
                    <p>Chatting</p>
                    <p>OTP verification</p>
                </div>
            </picture>
           </section>
        </section>
        <section className={style.livewire}>
            <h3>Live wireframing video</h3>
            <picture>
                <img src={wireframe10} alt="" />
            </picture>
        </section>
    </div>
  )
}
