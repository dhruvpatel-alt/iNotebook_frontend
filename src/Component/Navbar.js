import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';

function Navbar() {
  let location=useLocation();
  let history=useNavigate(); 

const logout=()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("success");
  history('/login');
}
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" style={{zIndex:10}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="changeZindex">
        <li className="nav-item" style={{zIndex:10}}>
          <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item" style={{zIndex:10}}>
          <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
        </li>
      </ul>
     {!localStorage.getItem('token')? <form className="d-flex"><Link to="/login" style={{zIndex:12}} className="btn btn-danger mx-1" tabIndex="-1" role="button" aria-disabled="true">Login</Link>
      <Link to="/signup" className="btn btn-success mx-1" style={{zIndex:12}} tabIndex="-1" role="button" aria-disabled="true">Sign Up</Link>
    </form>:<button onClick={logout} className="btn btn-danger" style={{zIndex:12}}>Logout</button>}
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
