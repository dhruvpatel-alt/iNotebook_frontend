import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  const initialnotes=[];
  const [notes,setNotes]=useState(initialnotes);
  
  //add note
  const getNote=async(jwt)=>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/notes/fetchallNote`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":jwt||localStorage.getItem('token')
      },
      mode: 'no-cors' // Add mode: 'no-cors'
    });
    const json=await response.json();
    setNotes(json);
  };

  const addNote=async(title,description,tag)=>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/notes/addnote`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      mode: 'no-cors', // Add mode: 'no-cors'
      body: JSON.stringify({title,description,tag}) 
    });
    const note=await response.json();
    setNotes(notes.concat(note));
  };
  
  //delete note
  const deleteNote=async(id)=>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/notes/delete/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      mode: 'no-cors' // Add mode: 'no-cors'
    });

    const newNotes=notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
  }

  //update note
  const editNote=async(id,title,description,tag)=>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/notes/updatenote/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      mode: 'no-cors', // Add mode: 'no-cors'
      body: JSON.stringify({title,description,tag}) 
    });
    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      if(newNotes[index]._id===id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;  
      }
    }
    setNotes(newNotes);
  }
  
  return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
      {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;
