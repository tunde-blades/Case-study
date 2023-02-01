import React from 'react'
import { Link } from 'react-router-dom'
import style from './section.module.css'

export default function Section2() {
  return (
    <div className='container'>
        <section className={style.design}>
            <div>
                <h5>Ux Design Course</h5>
                <h6>Certificate of ux design</h6>
            </div>
            <small>
                <p>I have a six months training certificate with coursera, where i have gotten</p>
                <ol>
                    <li>the Foundations of User Experience (UX) Design</li>
                    <li>UX Design Process: Empathize, Define,and Ideate</li>
                    <li>built low and high fidelity prototypes</li>
                </ol>
            </small>
        </section>
        <section className={style.work}>
            <div className={style.content}>  
                <h3>Work History</h3>
                <div>
                    <h5>Civil Engineer</h5>
                    <h6>Laluco Construction</h6>
                </div>
                <button>July 2018- February 2021</button>
            </div>
            <div className={style.content}>
                <div>
                    <h5>Pwan Group</h5>
                    <h6>ux Designer</h6>
                </div>
                <button>August 2021 Present</button>
                <small>As a UX designer I have worked on various projects which includes working for a real estate company and designing a learning management system for a school
                    <br/>
                    I have been working with pwan group for over a year, designing and prototyping various products that are online, building case studies and carrying out user research to enable our team work better.</small> 
            </div>
            <div className={style.content}>
                <h5>Solomon Hills</h5>
                <h6>Product Designer</h6>
                <button>March 2022 - present</button>
                <small>Tasked with building a mobile version of the solomonhills web application</small>
            </div>
            <div className={style.content}>
                <h5>Solomon Hills</h5>
                <h6>Product Designer</h6>
                <button>March 2022 - present</button>
                <small>Tasked with building a mobile version of the solomonhills web application</small>
            </div>
        </section>
    </div>
  )
}
