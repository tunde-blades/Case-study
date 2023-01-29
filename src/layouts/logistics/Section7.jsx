import React from 'react'
import style from './section.module.css'
import chart2 from '../../images/chart2.png'


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
                            <p>Yemi</p>
                        </div>
                        <div>
                            <h5>Scenerio</h5>
                            <p>She wants to send a recently made dress to one of her customer</p>
                        </div>
                        <div>
                            <h5>Expectations</h5>
                            <ul>
                                <li>Easy to send</li>
                                <li>Fast and efficient</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.box1}>
                        <h5>Phase</h5>
                        <div>
                            <p>Package the dress</p>
                            <hr />
                            <small>Yemi looks for a way to package dress</small>
                        </div>
                        <div>
                            <p>Gives money and dress to staff to send</p>
                            <hr />
                            <small>she decide to send a staff, thereby paying the staffs fare to and fro</small>
                        </div>
                        <div>
                            <p>staff enters public bus</p>
                            <hr />
                            <small>Staff enters public us</small>
                        </div>
                        <div>
                            <p>Gives package and returns</p>
                            <hr />
                            <small>Gives package to client and returns to meet Yemi</small>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h5>Action</h5>
                        <img src={chart2} alt="" />
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
                            <li>alternative source of packages</li>
                        </ul>
                        <ul>
                            <li>more efficient mode of transportation</li>
                        </ul>
                        <ul>
                            <li>better way to beat traffic</li>
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
