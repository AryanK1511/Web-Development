import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Function which creates a notes - Receives note from CreateArea
  function addNote(newNote) {
    setNotes(prevNotes => {
      return (
        [...prevNotes, newNote]
      );
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((note, index) => {
          return <Note key={index} id={index} title={note.title} content={note.content}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
