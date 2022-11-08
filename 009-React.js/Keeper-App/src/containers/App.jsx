import React from 'react';
import Header from '../components/Header';
import Note from '../components/Note';
import Footer from '../components/Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Note />
                <Footer />
            </div>
        )
    }
}

export default App;