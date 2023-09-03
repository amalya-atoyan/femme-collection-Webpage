import './Customers.css'


const Customers = (props) =>{
    return(
        <>
            <div className='customFlex'>
                <div>
                   <img src={props.src} className='customPhoto'></img>
                </div>
                <div className='customName'>
                    <h2 className='customN'>{props.name}</h2>
                    <p className='aboutUs'>{props.about}</p>
                </div>
            </div>
        </>
    )
}

export default Customers

