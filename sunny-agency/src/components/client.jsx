import oval from '../assets/Oval.svg'
import oval2 from '../assets/Oval2.svg'
import oval3 from '../assets/Oval3.svg'

const Client = () => {

    function Client(props) {
        return (
            <div className='client' style={{backgroundColor:'transparent',display:'flex',flexDirection:'column',gap:'20px',justifyContent:'space-between'}}>
                <div style={{padding:'50px 50px'}}>
                    <img src = {props.Image}></img>
                </div>
                <p style={{padding:'12px'}}>{props.description}</p>
                <div>
                    <h2>{props.name}</h2>
                    <short>{props.role}</short>
                </div>
            </div>
        )
    }

    return (
        <section className='clients' style={{backgroundColor:'white',display:'flex',justifyContent:'center',alignItems: 'center',height:'100vH'}}>
            <div className='testimonials' style={{display:'flex',padding:'120px 100px',backgroundColor:'white',textAlign:'center'}}>
                <Client Image = {oval} description = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name = 'Emily R.' role = 'Marketing Director'/>
                <Client Image = {oval2} description = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name = 'Emily R.' role = 'Marketing Director'/>
                <Client Image = {oval3} description = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name = 'Emily R.' role = 'Marketing Director'/>
            </div>
        </section>
    )
}

export default Client;