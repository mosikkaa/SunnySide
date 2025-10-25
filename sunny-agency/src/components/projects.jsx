import React from 'react';
import bitmap from '../assets/bitmap.svg'
import bitmap2 from '../assets/bitmap2.svg'
import bitmap3 from '../assets/bitmap3.svg'
import bitmap4 from '../assets/bitmap4.svg'



const Projects = () => {
    return(
        <section style={{height:'100vH',width:'100%',display:'flex',flexFlow:'row wrap',flexWrap:'wrap'}}>
            <div style={{width:'25%',backgroundImage:`url(${bitmap4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{width:'25%',backgroundImage:`url(${bitmap3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{width:'25%',backgroundImage:`url(${bitmap2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{width:'25%',backgroundImage:`url(${bitmap})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
        </section>
    )
}

export default Projects;