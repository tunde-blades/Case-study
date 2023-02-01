import React from 'react'
import style from './section.module.css'
import image1 from '../../images/lfw 1.png'
import image2 from '../../images/lfw2.png'
import image3 from '../../images/lfw3.png'
import image4 from '../../images/lfw4.png'
import image5 from '../../images/lfw5.png'
import image6 from '../../images/lfw6.png'
import image7 from '../../images/lfw7.png'

import image8 from '../../images/hfw1.png'
import image9 from '../../images/hfw2.png'
import image10 from '../../images/hfw3.png'
import image11 from '../../images/hfw4.png'
import image12 from '../../images/hfw5.png'
import image13 from '../../images/hfw6.png'
import image14 from '../../images/hfw7.png'
import image15 from '../../images/hfw8.png'
import image16 from '../../images/hfw9.png'
import image17 from '../../images/hfw10.png'
import image18 from '../../images/hfw11.png'
import image19 from '../../images/hfw12.png'
import image20 from '../../images/hfw13.png'

import image21 from '../../images/just bills 1.png'


export default function Section10() {
  return (
    <div>
        <section className={style.section10}>
           <section className={style.picturebox}>
                <h3>low fidelity wireframing</h3>
                 <picture>
                    <img src={image1} alt="" />
                    <p>Landing page</p>
                </picture>
                <picture>
                    <img src={image2} alt="" />
                    <p>Airtime purchase design</p>
                </picture>
                <picture>
                    <img src={image3} alt="" />
                    <p>Airtime purchase design</p>
                </picture>
                <picture>
                    <img src={image4} alt="" />
                    <p>Tv subscription design</p>
                </picture>
                <picture>
                    <img src={image5} alt="" />
                    <p>Tv payment design</p>
                </picture>
                <picture>
                    <img src={image6} alt="" />
                    <p>Electricity bill design</p>
                </picture>
                <picture>
                    <img src={image7} alt="" />
                    <p>Electricity payment design</p>
                </picture>
           </section>

            <section className={style.picturebox2}>
                <h3>High fidelity Design</h3>
                 <picture>
                    <img src={image8} alt="" />
                    <p>Landing page</p>
                </picture>
                <picture>
                    <img src={image9} alt="" />
                    <p>purchase Airtel Airtime</p>
                </picture>
                <picture>
                    <img src={image10} alt="" />
                    <p>Review Transaction</p>
                </picture>
                <picture>
                    <img src={image11} alt="" />
                    <p>Purchase Mtn Airtime</p>
                </picture>
                <picture>
                    <img src={image12} alt="" />
                    <p>Purchase Glo Airtime</p>
                </picture>
                <picture>
                    <img src={image13} alt="" />
                    <p>Purchase 9mobile Airtime</p>
                </picture>
                <picture>
                    <img src={image14} alt="" />
                    <p>Purchase PHED Bill</p>
                </picture>
                <picture>
                    <img src={image15} alt="" />
                    <p> Purchase I.E Bill</p>
                </picture>
                <picture>
                    <img src={image16} alt="" />
                    <p>I.E Purchase Review</p>
                </picture>
                <picture>
                    <img src={image17} alt="" />
                    <p>Gotv Subscription</p>
                </picture>
                <picture>
                    <img src={image18} alt="" />
                    <p>Dstv Subscription</p>
                </picture>
                <picture>
                    <img src={image19} alt="" />
                    <p>Review Transaction</p>
                </picture>
                <picture>
                    <img src={image20} alt="" />
                    <p>FAQs</p>
                </picture>
           </section>

           <section>
            <h3>Final Product</h3>
            <picture>
                <img src={image21} alt="" />
            </picture>
            <h3 className={style.thanks}>Thank You <br /> For Viewing</h3>
           </section>

        </section>
    </div>
  )
}
