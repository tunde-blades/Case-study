import React from 'react'
import style from './section.module.css'
import chart4 from '../../images/chart4.png'

export default function Section6() {
  return (
    <div className='container'>
        <section className={style.section6}>
            <h3>Journey Maps</h3>
            <section>
                <h4>Persona A</h4>
                <section className={style.mainbox}>
                    <div className={style.headbox}>
                         <div>
                            <h5>User</h5>
                            <p>Yinka</p>
                        </div>
                        <div>
                            <h5>Scenerio</h5>
                            <p>He wants to buy data subscription to do a research assignment</p>
                        </div>
                        <div>
                            <h5>Expectations</h5>
                            <ul>
                                <li>Quick</li>
                                <li>No extra charge</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.box1}>
                        <h5>Phase</h5>
                        <div>
                            <p>Go out</p>
                            <hr />
                            <small>Yinka goes out of the house</small>
                        </div>
                        <div>
                            <p>Meet a vendor</p>
                            <hr />
                            <small>He meets the nearest vendor</small>
                        </div>
                        <div>
                            <p>Pay money</p>
                            <hr />
                            <small>He gives the vendor money</small>
                        </div>
                        <div>
                            <p>collect papper airtime and load</p>
                            <hr />
                            <small>Collects the paper airtime and then loads it before getting the data</small>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h5>Action</h5>
                        <img src={chart4} alt="" />
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
                            <li>stressed</li>
                        </ul>
                    </div>
                    <div className={style.box1}>
                        <h5>Opportunity</h5>
                        <ul>
                            <li>use of an application</li>
                        </ul>
                        <ul>
                            <li>more efficient mode of transportation</li>
                        </ul>
                        <ul>
                            <li>safer way of paying utility</li>
                        </ul>
                        <ul>
                            <li>prevent double journey</li>
                        </ul>
                    </div>
                   
                </section>
            </section>
        </section>
    </div>
  )
}
