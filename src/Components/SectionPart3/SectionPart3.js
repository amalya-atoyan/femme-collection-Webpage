import JewelryPart from '../JewelryPart/JewelryPart'
import './SectionPart3.css'


function SectionPart3() {
    return(
        <section className='section3' id='shop'>
            <div className='secFlex'>
                <JewelryPart/>
                <button className='moreJw'>More</button>
            </div>
        </section>
    )
    
}

export default SectionPart3