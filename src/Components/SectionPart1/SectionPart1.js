import './SectionPart1.css'
import PhotomodelPart from '../PhotomodelPart/PhotomodelPart'
import SloganPart from '../SloganPart/SloganPart'
import IconsPart from '../IconsPart/IconsPart'


function SectionPart1() {
    return (
        <section className='section1'>
            <PhotomodelPart/>
            <SloganPart/>
            <IconsPart/>
            <a href='#firstPage' className='cursor'></a>
        </section>

    )
    
}

export default SectionPart1