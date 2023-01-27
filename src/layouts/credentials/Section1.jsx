import React from 'react'
import style from './section.module.css'

export default function Section1() {
  return (
    <div className='container'>
        <section className={style.education}>
            <h3>Education</h3>
            <small>
                I have a 5 years working experience which includes 3 years as a civil engineer and 2 years as a ux designer.
            </small>
            <h5>Central University Ghana</h5>
            <h6>Civil Engineering</h6>
            <p>Student</p>
            <p>Sep 2013 - Jun 2017</p>
            <small>I completed a 4 year Civil Engineering Program in Ghana, after which I worked for 3 years with different construction companies, drawing plans and building houses. i decided it was time to take up another career as a UX designer.</small>
        </section>
    </div>
  )
}
