import React from 'react'
import Header from '../layouts/credentials/Header'
import Section1 from '../layouts/credentials/Section1'
import Section2 from '../layouts/credentials/Section2'
import Section3 from '../layouts/credentials/Section3'
import style from './background.module.css'

export default function Credentials() {
  return (
    <div className={style.backg}>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  )
}
