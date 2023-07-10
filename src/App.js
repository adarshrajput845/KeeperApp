import React,{useState} from 'react'
import Header from './componenets/Header'
import "./styles.css";
import Footer from './componenets/Footer';
import CreateArea from './componenets/CreateArea';
import Note from './componenets/Note';

function App(props){
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return <div>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          onDelete={deleteNotes}
          content={note.content}
         
        />
      ))}
     <Footer/>
  </div>
}

export default App;
