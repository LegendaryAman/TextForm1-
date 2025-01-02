//import { BrowserRouter as Router, Routes , Route }  from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
//import AboutUs from './components/AboutUs.js';



function App() {
  return (
    <>
{/* <Navbar Title="Home" About="About US"/> */}
<Navbar/>
<TextFrom />
{/* <Router>
  <Navbar/>
  <Routes>
    <Route  path='/'  element={<TextFrom />} />
    <Route path='/AboutUs' element={<AboutUs />} />
  </Routes>
</Router> */}

      

    </>
  );
}

export default App;
