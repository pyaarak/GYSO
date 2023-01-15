// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Aboutus from './Components/Aboutus';
import Highlights from './Components/Highlights';
import Training from './Components/Training';

function App() {
  return (
    <div className="App_name">
      <Home></Home>
      <Aboutus></Aboutus>
      <Highlights></Highlights>
      <Training></Training>
    </div>
  );
}

export default App;
