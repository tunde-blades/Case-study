import React from 'react'
import style from './section.module.css'
import user3 from '../../images/user3.png'
import user4 from '../../images/user4.png'

export default function Section5() {
  return (
    <div className='container'>
        <section className={style.section5}>
            <section className={style.needbox}>
                <div>
                    <h3>What's our users need</h3>
                    <p>A secure and swift payment platform that can pay utility bills without having to sign up</p>
                </div>
                <div>
                    <h3>unique feature improvement for our product</h3>
                    <p>After the competetors analysis its evident that the following features should be included our users app</p>
                </div>
                <ol>
                    <li>No sign up or log in</li>
                    <li>instant purchase on landing page</li>
                    <li>no extra charges</li>
                    <li>no need to link card</li>
                    <li>security features</li>
                </ol>
            </section>
            <h3>Users Personas</h3>
            <section className={style.persona}>
                <section className={style.personabox}>
                    <div className={style.details}>
                        <picture>
                            <img src={user3} alt="" />
                             <span className={style.name}>
                                <h4>Yinka Adewale</h4>
                                <small>Student</small>
                            </span>
                        </picture>
                        <div className={style.content}>
                            <p className={style.age}>22 Years Old ---- Student</p>
                            <h5>User Story</h5>
                            <small>Yinka is a 22 year old student living in lagos, who studies online from home. he lives with his mom and is learning new skill to improve his well being</small>
                            <h5>Goals</h5>
                            <small>
                                <p>1. Graduate top his class</p>
                                <p>2. Get a good side job to help with bills at home</p>
                            </small>
                            <h5>Motivations</h5>
                            <small>
                                <p>1. sense of accomplisment</p>
                                <p>2. making extra more money from side jobs</p>
                            </small>
                            <h5>Pain Point</h5>
                            <small>
                                <p>1. having too go out to pay bills</p>
                                <p>2. Being overcharged for bills</p>
                            </small>

                        </div>
                    </div>
                    <div className={style.details}>
                        <picture>
                            <img src={user4} alt="" />
                            <span className={style.name}>
                                <h4>Murphy Akai</h4>
                                <small>Ux Designer</small>
                            </span>
                        </picture>
                        <div className={style.content}>
                             <p className={style.age}>22 Years Old ---- Student</p>
                            <h5>User Story</h5>
                            <small>Yinka is a 22 year old student living in lagos, who studies online from home. he lives with his mom and is learning new skill to improve his well being</small>
                            <h5>Goals</h5>
                            <small>
                                <p>1. Graduate top his class</p>
                                <p>2. Get a good side job to help with bills at home</p>
                            </small>
                            <h5>Motivations</h5>
                            <small>
                                <p>1. sense of accomplisment</p>
                                <p>2. making extra more money from side jobs</p>
                            </small>
                            <h5>Pain Point</h5>
                            <small>
                                <p>1. having too go out to pay bills</p>
                                <p>2. Being overcharged for bills</p>
                            </small>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}
