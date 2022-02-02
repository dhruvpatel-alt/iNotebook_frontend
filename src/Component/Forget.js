import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Forget() {
  let history=useNavigate(); 
    const Back=()=>{
history('/login');
    }
    const [credentials,setCredentials]=useState({email:"",password:""});
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        };
    return (
        <div className="container my-5">
        <h2 className="container my-4">Reset Password</h2>
        <form >
<div className="mb-3">
  <label forhtml="email" className="form-label">Email address</label>
  <input type="email" className="form-control" value={credentials.email} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange}/>
</div>

<button type="button" className="btn btn-primary mx-2" >Send OTP</button>
<button type="button" className="btn btn-danger" onClick={Back} >Back</button>
</form> 
      </div>
    )
}

export default Forget
