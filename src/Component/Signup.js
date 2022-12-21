import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [validEmail,setValidEmail]=useState(false);
  const [nameFal,setNamefal]=useState(false);
  const [showConfirm,setShowConfirm]=useState(false);
  const [validPassword,setValidPassword]=useState(true);
const ValidateEmail=(email) =>
{ 
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
 if (filter.test(email))
  {
    setValidEmail(true);
  }
  else{
    setValidEmail(false);
    props.showalert("You have entered an invalid email address!","danger")
  }

}
  const check=(passwordhere)=>{
    setValidPassword(false);
    var y = passwordhere;
    if (y.length < 5) {
      setValidPassword(false);
    }
    else if (y.search[/a-z/i] < 1) {
      setValidPassword(false);
    }
    else if (y.search[/A-Z/i] < 1) {
      setValidPassword(false);
    }
    else if (y.search[/0-9/] < 1) {
      setValidPassword(false);
    }
    else{
      setValidPassword(true);
    }
}
    let history=useNavigate(); 
    const [credentials,setCredentials]=useState({name:"",cpassword:"",email:"",password:""});
    const onChange=(e)=>{
      if(credentials.name>=1&&nameFal){
        document.getElementById('name').backgroundColor="green";
        document.getElementById('name').color="white";
      }
        setCredentials({...credentials,[e.target.name]:e.target.value})
        };
    const handleSubmit=async (e)=>{
      if(credentials.name<1){
        props.showalert("Name should be given","danger");
        setNamefal(true);
        document.getElementById('name').style.backgroundColor="red";
        document.getElementById('name').style.color="white";
      }
      if(credentials.password!==credentials.cpassword){
        props.showalert("Confirm Password must be match with password","danger");
        setShowConfirm(true);
        return;
      }
 
e.preventDefault();
const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/auth/createuser`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        },
 body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
  });
  console.log(response.body);
  const json =await response.json();
  if(json.success){
    //redirect
    localStorage.setItem("token",json.token);
    localStorage.setItem("success",json.success);
    props.showalert("Account created Successfully","success");
    history('/');
  }

  else if(json.already){
    props.showalert("Email already exists","warning");
  }
  else{
    props.showalert("Invalid Credentials","danger");
  }
    }
    const passcheck=()=>{
      check(credentials.password);
    }
    const checkEmail=()=>{
 ValidateEmail(credentials.email);
    }
    return (
        <div className="container my-3">
          <h2 className="container my-4">SignUp for using  iNotebook</h2>
        <form onSubmit={handleSubmit}>
<div className="mb-3">
  <label forhtml="name" className="form-label">Enter Your Name</label>
  <input type="text" className="form-control" value={credentials.name} id="name" name="name"  onChange={onChange}/>
</div>
<div className="mb-3">
  <label forhtml="email" className="form-label">Email address</label>
  <input type="email" className="form-control" value={credentials.email} onBlur={checkEmail} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange}/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label forhtml="password" className="form-label">Password</label>
  <input type="password" name="password" value={credentials.password} id="password" className="form-control" onBlur={passcheck} minLength={5} onChange={onChange} required/>
 {!validPassword&&<small style={{color:validPassword?'green':'red'}}>Password must be atleast contain 5 letters and should have atleast a digit(0-9), lowercase(a-z) & Uppercase(A-Z). </small>}
</div>
<div className="mb-3">
  <label forhtml="cpassword" className="form-label">Confirm Password</label>
  <input type="password" name="cpassword" value={credentials.cpassword} id="cpassword" className="form-control" minLength={5} onChange={onChange} required/>
  {showConfirm&&<small style={{color:credentials.password!==credentials.cpassword?'red':'black'}}>Confirm password should match password.</small>}
</div>

<button type="submit" className="btn btn-primary" disabled={!validEmail||!validPassword}>Sign Up</button>
</form>
      </div>
    )
}

export default Signup
