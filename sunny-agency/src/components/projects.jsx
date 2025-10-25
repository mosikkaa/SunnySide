import bitmap from '../assets/bitmap.svg'
import bitmap2 from '../assets/bitmap.svg'
import bitmap3 from '../assets/bitmap.svg'
import bitmap4 from '../assets/bitmap.svg'



const Projects = () => {
    return(
        <section style={{height:'55vH',width:'100%',display:'flex',flexFlow:'row wrap',flexWrap:'wrap'}}>
            <div style={{height:'100%',width:'25%',backgroundImage:`url(${bitmap})`}}></div>
            <div style={{height:'100%',width:'25%',backgroundImage:`url(${bitmap2})`}}></div>
            <div style={{height:'100%',width:'25%',backgroundImage:`url(${bitmap3})`}}></div>
            <div style={{height:'100%',width:'25%',backgroundImage:`url(${bitmap4})`}}></div>
        </section>
    )
}

export default Projects;