import egg from '../assets/egg.svg'
import glass from '../assets/glass.svg'

const About = () => {
    return (
        <section style={{display: 'flex',flexFlow: 'row wrap',flexWrap: 'wrap'}}>
            <div className="container" style={{display:'flex',flexFlow:'row wrap',flexWrap:'wrap',height:'100vH',width:'100%'}}>
                <div style={{height:'100vH',width:'50%',backgroundImage:`url(${egg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
                <div style={{height:'100vh',width:'50%',backgroundImage:`url(${glass})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            </div>
            <div style={{height:'100vh',width:'50%',backgroundImage:`url(${glass})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{height:'100vh',width:'50%',backgroundImage:`url(${egg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{height:'100vh',width:'50%',backgroundImage:`url(${egg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
            <div style={{height:'100vh',width:'50%',backgroundImage:`url(${glass})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}></div>
        </section>
    )
}

export default About;