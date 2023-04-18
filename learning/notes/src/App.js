import { useState } from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import uuid from 'react-uuid';

function App() {

  // setting the notes array
  const [notes, setNotes] = useState([]);

  // note state management
  const [activeNote, setActiveNote] = useState(false);

  // all handler functions   are passed from App to respective

  const addNote = () =>{

    const newNote ={
      id:uuid(),
      title: 'untitled note',
      body:'',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes])
  }

  const onDeleteNote = (dltId) =>{ 
    setNotes(notes.filter(note => note.id !==  dltId));
  }

  const getActiveNote = () => {
    return notes.find((note)=> note.id === activeNote);
  }

  return (


    <div className="App">

      <Sidebar
        notes={notes} 
        onDeleteNote={onDeleteNote} 
        addNote={addNote} 
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      
      <Main
      
      activeNote={getActiveNote()}
      
      />


    </div>
  );
}

export default App;
