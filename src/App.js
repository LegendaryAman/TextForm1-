import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

let name = 'Aman Maurya'
function App() {
  return (
    <>
{/* <Navbar Title="Home" About="About US"/> */}
<Navbar/>
<TextFrom heading="Enter a text to Enelyise"/>
    </>
  );
}

export default App;
