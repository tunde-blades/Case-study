import React from 'react'
import style from './section.module.css'
import chart1 from '../../images/chart3.png'

export default function Section6() {
  return (
    <div className='container'>
        <section>
            <h3>Journey Maps</h3>
            <section>
                <h4>Persona A</h4>
                <section>
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
                            <h5>Package the document</h5>
                            <hr />
                            <small>Onyebuchi looks for a way to package documents</small>
                        </div>
                        <div>
                            <h5>Puts document in car</h5>
                            <hr />
                            <small>He decides to put the document in car</small>
                        </div>
                        <div>
                            <h5>Drives to the bank</h5>
                            <hr />
                            <small>Starts car and drinve all the way</small>
                        </div>
                        <div>
                            <h5>Gives document to account officer</h5>
                            <hr />
                            <small>Gives account officer the item and heads back home</small>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h5>Action</h5>
                        <img src={chart1} alt="" />
                    </div>
                   
                </section>
            </section>
        </section>
    </div>
  )
}
