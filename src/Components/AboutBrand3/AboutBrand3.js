import '../AboutBrand3/AboutBrand3'

const  AboutBrand3 = (props) => {
    return(
        <div className={props.divClass}>
            <p className={props.pClass}> 
                {props.title}
            </p>
            <img src={props.src} className={props.imgClass}></img>  
        </div>
    )
}

export default AboutBrand3