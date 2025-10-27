import React from 'react';
import bitmap from '../assets/Bitmap.svg'
import bitmap2 from '../assets/Bitmap2.svg'
import bitmap3 from '../assets/Bitmap3.svg'
import bitmap4 from '../assets/Bitmap4.svg'



const Projects = () => {
    return(
        <section style={{height:'100vH',display:'flex',flexFlow:'row wrap',flexWrap:'wrap'}}>
            <div className='project' style={{ display:'block',width:'25%',backgroundImage:`url(${bitmap4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div className='project' style={{ display:'block',width:'25%',backgroundImage:`url(${bitmap3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div className='project' style={{ display:'block',width:'25%',backgroundImage:`url(${bitmap2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div className='project' style={{ display:'block',width:'25%',backgroundImage:`url(${bitmap})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
        </section>
    )
}

export default Projects;