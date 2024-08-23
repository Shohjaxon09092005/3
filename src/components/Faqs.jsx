import React from 'react'
import '../styles/faqs.css'
import rasm1 from '../images/top.png'
import rasm2 from '../images/bottom faq.png'
function Faqs() {
  return (
    <div className='faq'>
        <div className="container">
            <h2>FAQs</h2>
            <div className="faq_wrapper">
                <h3>How it works</h3>
                <div className="faq_card">
                    <div className="faq_card_div">
                        <div className="faq_content">
                            <h4>How do I download the app?</h4>
                            <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                        </div>
                        <img src={rasm1} alt="" />

                    </div>
                    <div className="faq_card_div1">
                        <div className="faq_content">
                            <h4>Can I find a nearby Scoots?</h4>
                           
                        </div>
                        <img src={rasm2} alt="" />

                    </div>
                    <div className="faq_card_div1">
                        <div className="faq_content">
                            <h4>Do I need a license to ride?</h4>
                           
                        </div>
                        <img src={rasm2} alt="" />

                    </div>
                </div>
            </div>
            <div className="faq_wrapper top">
                <h3>Safe driving</h3>
                <div className="faq_card">
                    <div className="faq_card_div">
                        <div className="faq_content">
                            <h4>Should I wear a helmet?</h4>
                            <p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</p>
                        </div>
                        <img src={rasm1} alt="" />

                    </div>
                    <div className="faq_card_div1">
                        <div className="faq_content">
                            <h4>How about the rules & regulations?</h4>
                           
                        </div>
                        <img src={rasm2} alt="" />

                    </div>
                    <div className="faq_card_div1">
                        <div className="faq_content">
                            <h4>What if I damage my Scoot?</h4>
                           
                        </div>
                        <img src={rasm2} alt="" />

                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Faqs
