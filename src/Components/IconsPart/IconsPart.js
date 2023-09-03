import { FbSVG } from '../FbSVG/FbSVG'
import { InstaSvg } from '../InstaSVG/InstaSVG'
import { PinterestSVG } from '../PinterestSVG/PinterestSVG'
import './IconsPart.css'



function IconsPart() {
    return(
        <div className='iconsPart'>
            <a href='https://www.instagram.com/femme.collection_/?igshid=NTc4MTIwNjQ2YQ%3D%3D' target='_blank'><InstaSvg/></a>
            <a> <FbSVG/></a>
            <a><PinterestSVG/></a>
        </div>
    )
    
}

export default IconsPart
