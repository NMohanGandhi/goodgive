// import logo from './logo.svg';
import './App.css';
import CoreValues from './Componenets/Corevalues';
import Footer from './Componenets/Footer';
import Header from './Componenets/Header';
import HeroSection from './Componenets/Herocomponent';
import Visionmission from './Componenets/visionmission';
import HowToDonate from './Component1/HowToDonate';
import SuccessStories from './Component1/SuccessStories';
import VolunteerPage from './Component2/VolunteerPage';
import FooterGoodgive from './Component2/FooterGoodgive';
// import Header from './header';

function App() {
  return (
    <div className="App">
     <Header/>
     <HeroSection/>
     <Visionmission/>
     <CoreValues/>
     <Footer/>
     <HowToDonate/>
     <SuccessStories/>
     <VolunteerPage/>
     <FooterGoodgive/>

    </div>
  );
}

export default App;
