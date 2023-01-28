import React from 'react'
import style from './section.module.css'
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'

export default function Section5() {
  return (
    <div className='container'>
        <section className={style.section5}>
            <section className={style.needbox}>
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
            <section className={style.persona}>
                <section className={style.personabox}>
            <h3>Users Personas</h3>
                    <div className={style.details}>
                        <picture>
                            <img src={user1} alt="" />
                             <span className={style.name}>
                                <h4>Onyebuchi Isaac</h4>
                                <small>Computer Engineer</small>
                            </span>
                        </picture>
                        <div className={style.content}>
                            <p className={style.age}>22 Years Old ---- Computer engineer</p>
                            <h5>User Story</h5>
                            <small>Onyebuchi is a 29 year old computer engineer living in lagos, who tries his best at what he does and works from home. he lives with his dog and prefer to be alone most of the day working on projects.</small>
                            <h5>Goals</h5>
                            <small>
                                <p>1. Working effortlessly to prove a point</p>
                                <p>2. better time management</p>
                                <p>3. build a very good products to get more client recomendation</p>
                            </small>
                            <h5>Motivations</h5>
                            <small>
                                <p>1. sense of accomplisment</p>
                                <p>2. making more money</p>
                                <p>3. being the best at what he does</p>
                            </small>
                            <h5>Pain Point</h5>
                            <small>
                                <p>1. not having enough time to cook</p>
                                <p>2. delivery services being late with orders</p>
                            </small>

                        </div>
                    </div>
                    <div className={style.details}>
                        <picture>
                            <img src={user2} alt="" />
                            <span className={style.name}>
                                <h4>Yemi Adebisi</h4>
                                <small>Fashion Designer</small>
                            </span>
                        </picture>
                        <div className={style.content}>
                             <p className={style.age}>47 Years Old ---- Fashion Dedigner</p>
                            <h5>User Story</h5>
                            <small>Yemi is a 47 year old fashion designer living in lagos with her husband and 3 kids, she works from her office tries. she spends most her time designing while her workers sew so she can meet up with her online demand</small>
                            <h5>Goals</h5>
                            <small>
                                <p>1. Ensure all her client are satisfied</p>
                                <p>2. improve on her brand</p>
                                <p>3. Give good products to get good recommendations</p>
                            </small>
                            <h5>Motivations</h5>
                            <small>
                                <p>1. Seeing products she designs in the best shops in the country</p>
                                <p>2. making more money</p>
                            </small>
                            <h5>Pain Point</h5>
                            <small>
                                <p>1. Cloths not getting to clients ontime</p>
                                <p>2. Food delivery for workers being late</p>
                            </small>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}
