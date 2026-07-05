import React, {useState} from 'react'
import './Notes.css'
function NotesApp() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);


  return (
    <> <div className='Container'>
      <div className="notes-card">
    <header className='heading'>Notes</header>
    <div className='main'>
      <input type="text" placeholder='Title' value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      />
      <textarea name="Content" placeholder='Content' id="Content" value={content}
      onChange={(e) => {
        setContent(e.target.value)
      }}
      ></textarea>
      <button className='AddNoteButton' onClick={() => {
        if (!title.trim() || !content.trim()) {
        return;
       }
        const note = {
          title,
          content,
        }
        console.log("Button clicked")
        setNotes((prev) => [...prev, note])

        setTitle('')
        setContent('')
        
      }}>Add Note</button>
      </div>
      <div className="notes-list">
        {
        notes.map((note, index) =>{
        return ( <div className='note-card' key = {index}>
             <div className="note-header">
             <h3>{note.title}</h3>
             <button className="DeleteButton"  onClick={() => {
               setNotes((prev) => {
                return prev.filter((note, currentIndex) => currentIndex !== index)
              })
            }}>
            Delete
           </button>
           </div>
            <p>{note.content}</p>
          </div>)
        })
      }
      </div>
      </div>
      </div>
    </>
  ) 
}

export default NotesApp