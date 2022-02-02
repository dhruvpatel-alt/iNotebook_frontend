import React,{useContext,useState} from 'react';
import NoteContext from '../Context/notes/NoteContext';
function AddNote(props) {
   const context = useContext(NoteContext);
   const {addNote}=context;
   const [showDes,setShowDes]=useState(false);
   const [showtitle,setShowtitle]=useState(false);
   const [note,setNote]=useState({title:"",description:"",tag:"default"}); 
   const onClick=(e)=>{
       e.preventDefault();
       addNote(note.title,note.description,note.tag);
       setNote({title:"",description:"",tag:"default"});
props.showalert("Note Added Successfully","success");

   };
   const desBlur=(e)=>{
if(e.target.value.length<5){
  document.getElementById('des').style.backgroundColor='red';
  document.getElementById('des').style.color='white';
  setShowDes(true);
}
   }
   const titleBlur=(e)=>{
     if(e.target.value.length<3){
  document.getElementById('title').style.backgroundColor='red';
  document.getElementById('title').style.color='white';
  setShowtitle(true);
}
   }
   const onChange=(e)=>{
    if(e.target.value.length>=3&&showtitle){
      document.getElementById('title').style.backgroundColor='green';
      document.getElementById('title').style.color='white';
      setShowtitle(false)
    }
   setNote({...note,[e.target.name]:e.target.value})
   };
   const desonChange=(e)=>{
    if(e.target.value.length>=5&&showDes){
      document.getElementById('des').style.backgroundColor='green';
      document.getElementById('des').style.color='white';
      setShowDes(false);
    }
   setNote({...note,[e.target.name]:e.target.value})
   };

    return (
        <div>
                <h2>Add Notes</h2>
           <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={note.title} minLength={3} id="title" name="title" onBlur={titleBlur} aria-describedby="emailHelp" onChange={onChange} required/>
    {showtitle&& <small style={{color:"red"}}>Title must contain atleast 3 characters</small>}
  </div>
  <div className="mb-3">
    <label htmlFor="des" className="form-label">Description</label>
    <input type="text" className="form-control" value={note.description} onBlur={desBlur} minLength={5} id="des" name="description" onChange={desonChange} required/>
    {showDes&& <small style={{color:"red"}}>Description must contain atleast 5 letter</small>}
 <small className="container" id="restrict" style={{color:"green"}}>No one will be to access your NOTE without your credentials</small>
  </div>
  <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={onClick}>Add Notes</button>
</form>
        </div>
    )
}

export default AddNote
