import './Logo.css'
import IMAGES from '../../images';

function Logo() {
    return(
        <div className='forLogo'>
            <img src={IMAGES.logo} alt="logoImg"  className='logoImg'/>
        </div>
    )
    
}

export default Logo