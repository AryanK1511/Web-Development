import React from 'react';
import Header from '../components/Header';
import Note from '../components/Note';
import Footer from '../components/Footer';
import notes from '../notes';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                {notes.map(noteItem => <Note key={noteItem.id} title={noteItem.title} content={noteItem.content}/>)};
                <Footer />
            </div>
        )
    }
}

export default App;