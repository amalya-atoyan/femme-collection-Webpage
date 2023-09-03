import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SectionPart1 from './Components/SectionPart1/SectionPart1'
import SectionPart2 from './Components/SectionPart2/SectionPart2';
import SectionPart3 from './Components/SectionPart3/SectionPart3';
import SectionPart4 from './Components/SectionPart4/SectionPart4';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <SectionPart1/>
        <SectionPart2/>
        <SectionPart3/>
        <SectionPart4/>
        <Footer/>
    </div> 
  );
}

export default App
