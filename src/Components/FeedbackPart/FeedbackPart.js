import './FeedbackPart.css'
import Customers from '../Customers/Customers'
import IMAGES from '../../images';


function FeedbackPart() {
    const feedback = [
        {
            id:'1',
            name:'Ani Petrosyan',
            about:'Ողջույն,ես Անին եմ։Էջի մասին տեղեկացել եմ ինստագրամի միջոցով։Պատվիրել եմ ոսկյա վզնոց,պատվերը ստացել եմ ՀայՓոստով։Ուզում եմ շնորհակալություն հայտնել Femme -ի ողջ թիմին իդեալական զարդի ու բարեհամբույր սպասարկման համար։',
            src:IMAGES.customer1
        },
        {
            id:'2',
            name:'Jasica Smith',
            about:'Hi,I am Jesica.I am from USA.I found this page thanks to my armenian girlfriend.I am  just in awe,this is amazing guys.I received exactly the jewelry I want․I want to express my special thanks to the founder Gayane Stepanyan, who patiently listened to me and received the 3D view of the jewelry I ordered. ',
            src:IMAGES.customer2

        },
        {
            id:'3',
            name:'Lusy Karapetyan',
            about:'Բարև ձեզ ես Լյուսին եմ։Պատվիրել եմ արծաթե մատանի ու անվանական ոսկյա վզնոց։Պատվերս պատրաստ է եղել ընդամենը 4 օրում։Անչափ հավանել եմ և շնորհակալ եմ հրաշալի սպասարկման համար։Ուզում եմ նաև շնորհակալություն հայտնել գեղեցիկ փաթեթավորման համար։',
            src:IMAGES.customer3

        }
    ]

    return(
        <>
            {
                feedback.map(el=>(
                    <Customers  key = {el.id} name={el.name} about ={el.about} src={el.src}/>
                ))
            }
        </>
    )
    
}

export default FeedbackPart