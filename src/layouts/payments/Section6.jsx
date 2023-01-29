import React from 'react'
import style from './section.module.css'
import chart1 from '../../images/chart3.png'

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
                            <p>Onyebuchi</p>
                        </div>
                        <div>
                            <h5>Scenerio</h5>
                            <p>He wants to send hard copy of his business registration to his account officer</p>
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
                            <p>Package the document</p>
                            <hr />
                            <small>Onyebuchi looks for a way to package documents</small>
                        </div>
                        <div>
                            <p>Puts document in car</p>
                            <hr />
                            <small>He decides to put the document in car</small>
                        </div>
                        <div>
                            <p>Drives to the bank</p>
                            <hr />
                            <small>Starts car and drinve all the way</small>
                        </div>
                        <div>
                            <p>Gives document to account officer</p>
                            <hr />
                            <small>Gives account officer the item and heads back home</small>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h5>Action</h5>
                        <img src={chart1} alt="" />
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
                            <li>adding package documents</li>
                        </ul>
                        <ul>
                            <li>more efficient mode of transportation</li>
                        </ul>
                        <ul>
                            <li>better way to beat traffic</li>
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
