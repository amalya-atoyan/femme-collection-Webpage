import './NavItem.css'

function NavItem(props) {
    return(
        <li className='menuItem'>
            <a href={props.href}>{props.title}</a>
        </li>
    )
    
}

export default NavItem