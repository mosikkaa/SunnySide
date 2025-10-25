import React from 'react';
import orange from "../assets/orange.svg";

const Home = () => {
    return (
        <div style={{ height: '100vH',width:'100%',backgroundImage: `url(${orange})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center' }}>
            <header style={{ backgroundColor:'transparent',width:'100%',padding:'34px 40px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'fixed'}}>
                <h1 style={{color:`rgba(255, 255, 255, 1)`}}>sunnyside</h1>
                <ul style={{ listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'60px'}}>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Projects</a></li>
                    <li className='contactBtn' style={{fontFamily: 'Fraunces 9pt Soft',
                        fontWeight:'700',
                        fontSize: '15px',
                        lineHeight: '25px',
                        letterSpacing: '-0.11px',
                        textTransform: 'uppercase',
                        padding: '10px 20px',
                        backgroundColor:'white',
                        borderRadius: '28px',
                    }}><a className='contactA' style={{color: `rgba(36, 48, 62, 1)`,}}>Contact</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Home