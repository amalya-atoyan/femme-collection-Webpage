import Logo from '../Logo/Logo'
import  './Footer.css'
 

function Footer() {
    return(
        <footer id='contact'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3048.592984806057!2d44.5077979!3d40.173615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc580bca3ea9%3A0xed45123e77a7c5fa!2sGold%20market!5e0!3m2!1sen!2sam!4v1693744231757!5m2!1sen!2sam" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
           <div className='footerPart'>
                <div className='contact'>
                    <span>
                        011 111 - 111
                    </span>
                    <span>
                        Yerevan,Abovyan11
                    </span>
                    <span>
                        femme-collection1@gmail.com
                    </span>
                </div>
                <Logo/>
            </div>
        </footer>
    )
}

export default  Footer