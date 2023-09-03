import './AboutBrand2.css'
import AboutBrand3 from '../AboutBrand3/AboutBrand3';
import IMAGES from '../../images';


function AboutBrand2() {
    return(
        <>
            <AboutBrand3 divClass={'section-content-four'} pClass={'aboutCompany2'} title={`'Amaras' Customers can always buy our jewelry with a 10% discount.`} src={IMAGES.salonAm} imgClass={'salonAm'}/>
            <AboutBrand3 divClass={'section-content-five'} pClass={'aboutCompany3'} title={`'Venus' Customers can always buy our jewelry with a 5% discount`} src={IMAGES.salonV} imgClass={'salonV'}/>
        </>
    )
}

export default AboutBrand2