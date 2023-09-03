import './PhotomodelPart.css'
import IMAGES from '../../images';


function PhotomodelPart() {
    return(
        <div className='section-content-one'>
            <img src={IMAGES.photoModel} alt="photomodel"  className='photoModel'/>
        </div>
    ) 
}



export default PhotomodelPart