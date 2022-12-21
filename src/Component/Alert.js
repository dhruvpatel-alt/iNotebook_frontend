import React from "react";
function Alert(props){

return(
<div id-="changezInd" style={{height:'50px',width:'100%',position:'fixed',top:'0px',zIndex:4,textAlign:"center"}}>
{props.alert &&  <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert"  >
  <strong>{props.alert.msg}</strong> 
</div> }
</div>
)
}
export default Alert;