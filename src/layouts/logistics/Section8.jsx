import React from 'react'
import style from './section.module.css'
import analysis from '../../images/analysis.png'

export default function Section8() {
  return (
    <div className='container'>
        <section className={style.section8}>
            <h3>Eisen Hover matrix</h3>
            <section className={style.mainbox}>
                    <div className={style.boxhead}>
                        <p>Urgent</p>
                        <p>Not Urgent</p>
                    </div>
                    <div className={style.content}>
                        <p>Important</p>
                        <ul className={style.list1}>
                            <li>instant purchase on landing page</li>
                            <li>security features</li>
                            <li>no extra charges</li>
                        </ul>
                        <ul className={style.list2}>
                            <li>stored emails</li>
                            <li>no sign up</li>
                            <li>customer care</li>
                        </ul>

                    </div>
                    <div className={style.content}>
                        <p>Not Important</p>
                        <ul className={style.list3}>
                            <li>log in</li>
                        </ul>
                        <ul className={style.list4}>
                            <li>linking card</li>
                        </ul>
                    </div>
            </section>
        </section>
        <section className={style.analysis}>
            <h3>Root cause analysis  (RCA)</h3>
            <picture>
                <button>Problem</button>
                <img src={analysis} alt="" />
            </picture>
        </section>
    </div>
  )
}
