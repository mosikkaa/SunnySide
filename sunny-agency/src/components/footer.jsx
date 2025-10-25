import React from 'react';
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import pinterest from '../assets/pinterest.svg'


const Footer = () => {
    return(
        <footer style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'80vH',backgroundColor:`rgba(144, 212, 198, 1)`}}>
            <div style={{height:'50%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',gap:'30px'}}>
                <h1>sunnyside</h1>
                <ul style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'50px',marginBottom:'40px'}}>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Projects</a></li>
                </ul>
                <ul style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px'}}>
                    <li><a><img src= {facebook}/></a></li>
                    <li><a><img src= {instagram}/></a></li>
                    <li><a><img src= {twitter}/></a></li>
                    <li><a><img src= {pinterest}/></a></li>
                </ul>


            </div>
        </footer>
    )
}

export default Footer;