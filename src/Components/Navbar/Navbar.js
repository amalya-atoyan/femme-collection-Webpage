import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import Logo from '../Logo/Logo'

function Navbar() {

    const menuInfo = [
        {
            id:'1',
            title:'About Us',
            href:'#about'
        },
        {
            id:'2',
            title:'Shop Now',
            href:'#shop'
        },
        {
            id:'3',
            title:'Our Customers',
            href:'#customers'
        },
        {
            id:'4',
            title:'Contact',
            href:'#contact'
        }
    ]

    return(
        <nav className='nav' id='firstPage'>
            <Logo/>
            <div className='lists'>
                <ul>
                    {
                        menuInfo.map(el => (
                            <NavItem key = {el.id} title={el.title} href ={el.href}/>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}


export default Navbar