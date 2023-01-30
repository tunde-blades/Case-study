import React from 'react'
import Header from '../layouts/credentials/Header'
import Section1 from '../layouts/logistics/Section1'
import Section2 from '../layouts/logistics/Section2'
import Section3 from '../layouts/logistics/Section3'
import Section4 from '../layouts/logistics/Section4'
import Section5 from '../layouts/logistics/Section5'
import Section6 from '../layouts/logistics/Section6'
import Section7 from '../layouts/logistics/Section7'
import Section8 from '../layouts/logistics/Section8'
import Section9 from '../layouts/logistics/Section9'
import style from './background.module.css'

export default function Logistics() {
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
        <Section8/>
        <Section9/>
    </div>
  )
}
