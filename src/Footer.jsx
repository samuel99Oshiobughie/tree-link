import "./Footer.css"
import I4G from './assets/I4G.png'

const Footer = () => {
  return (
    <footer>        
        <div className='zuriLogo'>
            <h2>
                Zuri 
                <span></span>
                    Internship
            </h2>
        </div>
        <div className='zuriText'>
            <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className='i4gLogo'> 
        <img src={I4G} alt="I4G logo" width="100px"/>
        </div>  
    </footer>
  )
}

export default Footer