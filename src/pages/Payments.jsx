import React from 'react'
import Header from '../layouts/credentials/Header'
import Section6 from '../layouts/payments/Section6'
import Section7 from '../layouts/payments/Section7'
import Section1 from '../layouts/payments/Section1'
import Section2 from '../layouts/payments/Section2'
import Section3 from '../layouts/payments/Section3'
import Section4 from '../layouts/payments/Section4'
import Section5 from '../layouts/payments/Section5'
import style from './background.module.css'

export default function Payments() {
  return (
    <div className={style.backg}>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
    </div>
  )
}
