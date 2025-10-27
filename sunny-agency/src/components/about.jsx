import React from 'react';
import egg from '../assets/egg.svg'
import glass from '../assets/glass.svg'
import fortoxali from '../assets/fortoxali.svg'
import bali from '../assets/bali.svg'

const About = () => {
    return (
        <section className='about' style={{display: 'flex',flexFlow: 'row wrap',flexWrap: 'wrap'}}>
            <div className="container" style={{display:'flex',flexFlow:'row wrap',flexWrap:'wrap',height:'75vH',width:'100%'}}>
                <div className='box' style={{height:'75vh',width:'50%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className='boxSZ' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'black',backgroundColor:'white',height:'100%',width:'80%',padding:'50px 50px',gap:'20px'}}>
                        <h1 style={{color:'rgba(36, 48, 62, 1)', fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '40px', lineHeight: '100%', letterSpacing: '-0.29px'}}>Transform your brand</h1>
                        <short style={{fontFamily: 'Barlow', fontWeight: '600', fontSize: '18px', lineHeight: '30px', letterSpacing: '-0.13px', color:'rgba(128, 131, 151, 1)'}}>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</short>
                        <div>
                            <a style={{textDecoration:'underline', fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '15px', lineHeight: '25px', letterSpacing: '1px', textTransform: 'uppercase'}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='box' style={{height:'75vh',width:'50%',backgroundImage:`url(${egg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            </div>
            <div className='box' style={{height:'75vh',width:'50%',backgroundImage:`url(${glass})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div className='box' style={{height:'75vh',width:'50%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className='boxSZ' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'black',backgroundColor:'white',height:'100%',width:'80%',padding:'50px 50px',gap:'20px'}}>
                        <h1 style={{color:'rgba(36, 48, 62, 1)', fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '40px', lineHeight: '100%', letterSpacing: '-0.29px'}}>Stand out to the right audience</h1>
                        <short style={{fontFamily: 'Barlow', fontWeight: '600', fontSize: '18px', lineHeight: '30px', letterSpacing: '-0.13px', color:'rgba(128, 131, 151, 1)'}}>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </short>
                        <div>
                            <a style={{textDecoration:'underline', fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '15px', lineHeight: '25px', letterSpacing: '1px', textTransform: 'uppercase'}}>Learn More</a>
                        </div>
                    </div>
            </div>
            <div className='box' style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',height:'75vh',width:'50%',backgroundImage:`url(${bali})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',}}>
                <div className='textDiv' style={{position:'absolute',bottom:'12%',width:'55%',height:'25%',textAlign:'center',color:'black',display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'20px'}}>
                    <h2 style={{fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '28px', lineHeight: '100%', letterSpacing: '-0.2px', textAlign: 'center', color:'rgba(5, 44, 59, 1,0,75)', opacity:'0.75'}}>Graphic Design</h2>
                    <short style={{fontFamily: 'Barlow', fontWeight: '600', fontSize: '16px', lineHeight: '27px', letterSpacing: '-0.11px', textAlign: 'center', color:'rgba(25, 83, 108, 1)'}}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</short>
                </div>
            </div>
            <div className='box' style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',height:'75vh',width:'50%',backgroundImage:`url(${fortoxali})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',}}>
                <div className='textDiv' style={{position:'absolute',bottom:'12%',width:'55%',height:'25%',textAlign:'center',color:'black',display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'20px'}}>
                    <h2 style={{fontFamily: 'Fraunces 9pt Soft', fontWeight: '900', fontSize: '28px', lineHeight: '100%', letterSpacing: '-0.2px', textAlign: 'center', color:'rgba(5, 44, 59, 1)', opacity:'0.75'}}>Photography</h2>
                    <short style={{fontFamily: 'Barlow',fontWeight: '600', fontSize: '16px', lineHeight: '27px', letterSpacing: '-0.11px', textAlign: 'center', color:'rgba(25, 83, 108, 1)',}}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</short>
                </div>
            </div>
        </section>
    )
}

export default About;