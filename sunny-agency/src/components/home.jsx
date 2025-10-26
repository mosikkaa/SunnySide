import React from 'react';
import orange from "../assets/orange.svg";
import menu from "../assets/menu.svg";



const Home = () => {
    return (
        <div style={{ height: '100vH',width:'100%',backgroundImage: `url(${orange})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}>
            <header style={{ backgroundColor:'transparent',width:'100%',padding:'34px 40px',display:'flex',flexDirection:'column',alignItems:'center',position:'fixed',gap:'34px'}}>
                <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <h1 style={{cursor:'pointer',color:`rgba(255, 255, 255, 1)`}}>sunnyside</h1>
                    <div onClick={() => {
                        const menuDiv = document.getElementsByClassName('menuDiv')[0];
                        if(menuDiv.style.display==='none') {
                            menuDiv.style.display='block';
                        }
                        else if(menuDiv.style.display==='block'){
                            menuDiv.style.display='none';
                        }

                    }} className='menuBar' style={{display:'none'}}><img src={menu}/></div>
                    <ul className='navH' style={{ listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'60px'}}>
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
                </div>

                <div className='menuDiv' style={{display:'none',width:'100%',height:'350px',backgroundColor:'white',padding:'50px 50px'}}>
                    <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',height:'100%',gap:'25px',color:'black'}}>
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
                            backgroundColor:'rgba(251, 214, 0, 1)',
                            borderRadius: '28px',
                        }}><a className='contactA' style={{color: `rgba(36, 48, 62, 1)`,}}>Contact</a></li>
                    </ul>
                </div>

            </header>
        </div>
    )
}

export default Home