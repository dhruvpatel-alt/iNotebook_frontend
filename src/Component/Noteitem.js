import React,{useContext} from 'react';
import NoteContext from '../Context/notes/NoteContext';
function Noteitem(props) {
    const {notes,updateNote}=props;
    const {deleteNote}=useContext(NoteContext);
    return (
        <div className="col-md-3">
          <div className="card my-3" >
  <div className="card-body">
    <div className="d-flex align-item-center mx-2">
    <h5 className="card-title">{notes.title}</h5>
    <i className="fas fa-edit mx-3 my-1" onClick={()=>{updateNote(notes)}}></i>
    <i className="far fa-trash-alt my-1" onClick={()=>{deleteNote(notes._id)
props.showalert(" Note Deleted Successfully","success");
}}></i>
    </div>
    <p className="card-text mx-3">{notes.description}</p>
  </div>
</div>
        </div>
    )
}

export default Noteitem
