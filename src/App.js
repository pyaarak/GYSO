// import logo from './logo.svg';
import './App.scss';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Aboutus from './Components/Aboutus';
import Highlights from './Components/Highlights';
import Training from './Components/Training';
import Whygyso from './Components/Whygyso';
import HowGysoworks from './Components/HowGysoworks';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App_name">
      <Home></Home>
      <Aboutus></Aboutus>
      <Highlights></Highlights>
      <HowGysoworks></HowGysoworks>
      <Training></Training>
      {/* <Whygyso></Whygyso> */}
      {/* <Contactus></Contactus> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
