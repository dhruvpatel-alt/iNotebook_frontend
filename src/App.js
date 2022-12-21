import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './Context/notes/NoteState';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Alert from './Component/Alert';
import {useState} from 'react';
import Forget from './Component/Forget';
function App() {
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    } 
    )
   
    setTimeout(() => {
      setalert(null);
    }, 2000); 

     
    
      }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container-my3" >

  {!localStorage.getItem('success')?   <Routes><Route exact path="/" element={<Login showalert={showalert}/>} />
  <Route exact path="/signup" element={<Signup showalert={showalert}/>} />
  <Route exact path="/forget" element={<Forget showalert={showalert}/>} />  
  <Route exact path="/about" element={<About/>} />
  <Route  path='/login' element={<Navigate replace to="/" />}>
</Route> </Routes>:<Routes>
<Route exact path="/login" element={<Login showalert={showalert}/>} />
  <Route exact path="/signup" element={<Signup showalert={showalert}/>} />
  <Route exact path="/forget" element={<Forget showalert={showalert}/>} />   
   <Route exact path="/" element={<Home showalert={showalert}/>} />
   <Route exact path="/about" element={<About/>} />
 </Routes>}
 
     
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
