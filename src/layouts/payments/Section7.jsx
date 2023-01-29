import React from 'react'
import style from './section.module.css'
import chart3 from '../../images/chart3.png'


export default function Section7() {
  return (
    <div className='container'>
        <section className={style.section7}>
            <section>
                <h4>Persona B</h4>
                <section className={style.mainbox}>
                    <div className={style.headbox}>
                         <div>
                            <h5>User</h5>
                            <p>Murphy</p>
                        </div>
                        <div>
                            <h5>Scenerio</h5>
                            <p>He wants to pay for his electricity bill</p>
                        </div>
                        <div>
                            <h5>Expectations</h5>
                            <ul>
                                <li>Easy to pay</li>
                                <li>No queue at subscription</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.box1}>
                        <h5>Phase</h5>
                        <div>
                            <p>Go to electricity company</p>
                            <hr />
                            <small>Murphy contemplates mode going to pay for his bils</small>
                        </div>
                        <div>
                            <p>wait in queue</p>
                            <hr />
                            <small>Murphy joins a long queue</small>
                        </div>
                        <div>
                            <p>pays for prepaid</p>
                            <hr />
                            <small>Murphy pays for utility bills</small>
                        </div>
                        <div>
                            <p>Goes back home</p>
                            <hr />
                            <small>He collects the receipt and goes home</small>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h5>Action</h5>
                        <img src={chart3} alt="" />
                    </div>
                    <div className={style.box1}>
                        <h5>Emotion</h5>
                        <ul>
                            <li>uncertain</li>
                            <li>confused</li>
                        </ul>
                        <ul>
                            <li>undecisive</li>
                        </ul>
                        <ul>
                            <li>impetient</li>
                        </ul>
                        <ul>
                            <li>stressed</li>
                            <li>satisfied</li>
                        </ul>
                    </div>
                    <div className={style.box1}>
                        <h5>Pain point</h5>
                        <ul>
                            <li>unable to find</li>
                        </ul>
                        <ul>
                            <li>expensive</li>
                        </ul>
                        <ul>
                            <li>wait too long</li>
                        </ul>
                        <ul>
                            <li>expensive</li>
                        </ul>
                    </div>
                    <div className={style.box1}>
                        <h5>Opportunity</h5>
                        <ul>
                            <li>use of application</li>
                        </ul>
                        <ul>
                            <li>more efficient way to no join a queue</li>
                        </ul>
                        <ul>
                            <li>better way to be activated</li>
                        </ul>
                        <ul>
                            <li>prevent double expense</li>
                        </ul>
                    </div>
                   
                </section>
            </section>
        </section>
    </div>
  )
}
