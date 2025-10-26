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
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'black',backgroundColor:'white',height:'80%',width:'80%',padding:'50px 50px'}}>
                        <h1>Transform your brand</h1>
                        <short>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</short>
                        <div>
                            <a style={{textDecoration:'underline'}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='box' style={{height:'75vh',width:'50%',backgroundImage:`url(${egg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            </div>
            <div className='box' style={{height:'75vh',width:'50%',backgroundImage:`url(${glass})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div className='box' style={{height:'75vh',width:'50%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'black',backgroundColor:'white',height:'80%',width:'80%',padding:'50px 50px'}}>
                        <h1>Transform your brand</h1>
                        <short>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</short>
                        <div>
                            <a style={{textDecoration:'underline'}}>Learn More</a>
                        </div>
                    </div>
            </div>
            <div className='box' style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',height:'75vh',width:'50%',backgroundImage:`url(${bali})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',}}>
                <div className='textDiv' style={{position:'absolute',bottom:'12%',width:'60%',height:'25%',textAlign:'center',color:'black',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    <h2>Graphic Design</h2>
                    <short>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</short>
                </div>
            </div>
            <div className='box' style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',height:'75vh',width:'50%',backgroundImage:`url(${fortoxali})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',}}>
                <div className='textDiv' style={{position:'absolute',bottom:'12%',width:'60%',height:'25%',textAlign:'center',color:'black',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    <h2>Photography</h2>
                    <short>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</short>
                </div>
            </div>
        </section>
    )
}

export default About;