import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Login(props) {
  let history=useNavigate(); 
  const forget=()=>{
history('/forget');
  }
    const [credentials,setCredentials]=useState({email:"",password:""});
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        };
    const handleSubmit=async (e)=>{
    
e.preventDefault();
const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/auth/login`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
        },
 body: JSON.stringify({email:credentials.email,password:credentials.password})
  });
  const json =await response.json();
  if(json.success){
    localStorage.setItem("token",json.token);
    localStorage.setItem("success",json.success);
    history('/');
props.showalert("Logged in Successfully","success");
  }
  else{
props.showalert("Invalid Details ,pls try again","danger");
  }
    }
    return (
        <div className="container my-5">
          <h2 className="container my-4">Login to Continue to iNotebook</h2>
          <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label forhtml="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label forhtml="password" className="form-label">Password</label>
    <input type="password" name="password" value={credentials.password} id="password" className="form-control"  onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary mx-2">Login</button>
  <button type="button" className="btn btn-danger" onClick= {forget}>Forget Password</button>
</form> 
        </div>
    )
}

export default Login
