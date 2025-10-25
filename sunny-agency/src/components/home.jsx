import orange from "../assets/orange.svg";

const Home = () => {
    return (
        <div style={{ height: '100vH',width:'100%',backgroundImage: `url(${orange})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center' }}>
            <header style={{ backgroundColor:'transparent',width:'100%',padding:'34px 40px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1 style={{color:`rgba(255, 255, 255, 1)`}}>sunnyside</h1>
                <ul style={{ listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px'}}>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Home