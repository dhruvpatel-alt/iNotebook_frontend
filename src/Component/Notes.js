import React,{useContext,useEffect,useState} from 'react'
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import NoteContext from '../Context/notes/NoteContext';
import * as ReactBootstrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
  let history=useNavigate(); 
 const {showalert}=props;
const [update,setUpdate]=useState(false);
    const [show,setShow]=useState(false);
    var Modal = ReactBootstrap.Modal;
    const context = useContext(NoteContext);
    const {notes,getNote,editNote}=context;
    const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:"default"}); 
useEffect(() => {
  if(localStorage.getItem("token")){
    getNote();
  }
  else{
    history('/login');
  }
})
const updateNote = (currentnote)=>{
    setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description});
    setShow(true);
    
}
const onClick=(e)=>{
    note.etag="default";
setShow(false);
editNote(note.id,note.etitle,note.edescription,note.etag);
e.preventDefault();
props.showalert("Update Note Successfully","success");

};
const onChange=(e)=>{
  setUpdate(true);
setNote({...note,[e.target.name]:e.target.value})
};
const handleClose = () => setShow(false);
    return (
        <>
            <AddNote showalert={showalert}/>
         <ReactBootstrap.Button variant="primary" style={{display:"none"}}>
        Launch demo modal
      </ReactBootstrap.Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" minLength={3} name="etitle" value={note.etitle} onChange={onChange} required/> 
  </div>
  <div className="mb-3">
    <label htmlFor="edes" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="edes" minLength={5} name="edescription" value={note.edescription} onChange={onChange}  rows={2} required></textarea>
  </div>
 
</form>
        </Modal.Body>
        <Modal.Footer>
          <ReactBootstrap.Button variant="secondary" onClick={handleClose}>
            Close
          </ReactBootstrap.Button>
          <ReactBootstrap.Button variant="primary" onClick={onClick} disabled={note.etitle.length<3 || note.edescription.length<5||!update}>
            Update Note 
          </ReactBootstrap.Button>
        </Modal.Footer>
      </Modal>
    
        <div className="row my-3">
               <h2>Your Notes</h2>
               <div className="container">
               {notes.length===0 && 'No Notes To Display'}
               </div>
           {notes.map((notes)=>{
             return <Noteitem key={notes._id} updateNote={updateNote} notes={notes} showalert={showalert}/>
           })}
        </div>
        </>
    )
}

export default Notes
