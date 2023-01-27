import React from 'react'
import style from './section.module.css'

export default function Section3() {
  return (
    <div className='container'>
        <section className={style.section3}>
            <header>
                <div className={style.quantitative}>
                    <h3>Quantitative Research</h3>
                    <p>we conducted an online surveye with about 50 users who foll in our torget demogrophics to prevent all types of biases</p>
                </div>
            </header>
            <section className={style.research}>
                <div className={style.box}>
                    <h4>RESEARCH QUESTIONS:</h4>
                    <ol>
                        <li>do you pay your bills online?</li>
                        <li>do you enjoy the process of signing up into a new application</li>
                        <li>how much time do you spend online paying for utility bills</li>
                        <li>do you spend extra charges paying online</li>
                        <li>do you see the this system  a safe</li>
                        <li>would you like to product that can pay bills without having to sign up? why?</li>
                    </ol>
                </div>
                <div className={style.box1}>
                   <div className={style.boxright}>
                         <h4>Observation</h4>
                        <ul>
                            <li>63% individuals pay bills online</li>
                            <li>34% of individuals enjoy a signup process</li>
                            <li>About 70% spend over 10minutes performing a payment task</li>
                            <li>38% say they are charged extra when paying bills</li>
                            <li>59% see this service as unsafe</li>
                            <li>90% would prefer a product that can pay for bills without signing up but will be secure</li>
                        </ul>
                   </div>
                </div>
            </section>
        </section>
    </div>
  )
}
