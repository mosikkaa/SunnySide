import React from 'react';
import oval from '../assets/Oval.svg'
import oval2 from '../assets/Oval2.svg'
import oval3 from '../assets/Oval3.svg'

const Client = () => {

    function Client(props) {
        return (
            <div className='client' style={{backgroundColor:'transparent',display:'flex',flexDirection:'column',gap:'20px',justifyContent:'space-between',padding:'20px 0px'}}>
                <div style={{padding:'40px 40px'}}>
                    <img src = {props.Image}></img>
                </div>
                <p style={{padding:'12px',fontFamily: 'Barlow',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '32px',
                    letterSpacing: '-0.13px',
                    textAlign: 'center',
                    color:'rgba(91, 99, 109, 1)'
                }}>{props.description}</p>
                <div>
                    <h1 style={{marginBottom:'10px',color:'rgba(36, 48, 62, 1)',
                        fontFamily: 'Fraunces 9pt Soft',
                        fontWeight: '900',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '-0.13px',
                        textAlign: 'center',
                    }}>{props.name}</h1>
                    <short style={{color:'rgba(167, 170, 173, 1)',
                        fontFamily: 'Barlow',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '25px',
                        letterSpacing: '-0.1px',
                        textAlign: 'center',
                    }}>{props.role}</short>
                </div>
            </div>
        )
    }

    return (
        <section className='clients' style={{backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems: 'center',padding:'120px 100px',textAlign:'center'}}>
              <h1 style={{color:`rgba(167, 170, 173, 1)`,fontFamily: 'Fraunces 9pt Soft',
                  fontWeight: '900',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '5px',
                  textAlign: 'center'
              }}>CLIENT TESTIMONIALS</h1>
              <div className='testimonial' style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
                <Client Image = {oval} description = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name = 'Emily R.' role = 'Marketing Director'/>
                <Client Image = {oval2} description = 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' name = 'Thomas S.' role = 'Chief Operating Officer'/>
                <Client Image = {oval3} description = 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name = 'Jennie F.' role = 'Business Owner'/>
              </div>
        </section>
    )
}

export default Client;