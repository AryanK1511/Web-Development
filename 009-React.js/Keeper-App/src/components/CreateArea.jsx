import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        // Spread operator spreads all of the key value pairs in the new object
        ...prevNote,
        // The [] changes the name from a normal string to something with meaning
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    // Prevents the reloading of the page
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
