import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
   BrowserRouter as 
   Router, 
   Routes, 
   Route, 
   } from 'react-router-dom';



function App() {      
const[mode, setMode] = useState('light'); // whether a dark mode is enable or not
const[alert,setAlert]=useState(null)

const showAlert = (message, type)=>{
setAlert({                                //creating object of alert
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null);
}, 2000);
}
 //function based component
 const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been Enabled","success");
    document.title='MyApp - Dark Mode';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been Enabled","success");
    document.title='MyApp - Light Mode';

  }
  
 }
  return (                                                  // all things inside retun is JSX. // passing "MyAPP" as props in Navbar.
   <>      
<Router>                                             
<Navbar title="MyApp" aboutText="About MyApp" mode={mode} toggleMode={toggleMode}/>      
<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>} />
           
</Routes>
</div>                
</Router> 
</>
    
  );
}

export default App;
