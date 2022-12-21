import React from 'react'
import { useState,useEffect } from 'react';

function OS(props) {
    const [notes,setNotes]=useState([]);

    const getNote=async()=>{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/notes/fetchallNote`, {
          method: 'GET', 
          headers: {
      'Content-Type': 'application/json',
      "auth-token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2NkNjcwODAzMDI4ZTRkODVjY2Y5In0sImlhdCI6MTY2NTY1MDAyM30.YE0d48sy7b8nO0TEhqcsZrjUdklMGh2FE2FnbdtKv28'
        }
      });
      const json=await response.json();
      console.log(json)
setNotes(json);
};
useEffect(() => {
    getNote()
}, [])
  
const copyText=(i)=>{
    navigator.clipboard.writeText(notes[i].description);
    props.showalert("Copy text successfully","success")
}



    return (
        <>
            <div className="row my-3">
               <h2>Your Notes</h2>
               <div className="container">
               {notes.length===0 && 'No Notes To Display'}
               </div>
        {notes.map((note,i)=>(
            <div className="col-md-3" key={i}>
          <div className="card my-3" >
  <div className="card-body">
    <div className="d-flex align-item-center mx-2">
    <h5 className="card-title">{note.title}</h5>
    <i className="fas fa-clone mx-3 my-1" onClick={()=>{copyText(i)}}></i>
    </div>
    <p className="card-text mx-3">{note.description}</p>
  </div>
</div>
        </div>
))
}
</div>

</>
    )}
export default OS