// destructuring the notes from props
function Sidebar ({notes, addNote, onDeleteNote, activeNote, setActiveNote}) {

    return (
        <div className="app-sidebar">

            <div className="app-sidebar-header">

                <h1>Notes</h1>

                <button onClick={addNote}>Add</button>

            </div>

            <div className="app-sidebar-notes">

            {
                // mapping the recieved notes
                notes.map((note) =>  (
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={()=>{setActiveNote(note.id)}}>

                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <button onClick={() => onDeleteNote(note.id)}>Delete note</button>
                    </div>

                    <p>{note.body && note.body.substr(0,50)+" ...."}</p>

                    <small className="note-meta">Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
                        // formating the date
                        hour:'2-digit',
                        minute:'2-digit'
                    })}</small>
                </div>
            ))}
                
            </div>
        </div>
    );
    
}

export default Sidebar;