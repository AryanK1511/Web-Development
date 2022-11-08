import React from 'react'
import {robots} from './robots'
import CardList from './CardList'

const App = () => {
    return (
        <CardList robots={robots} />
    )
}

export default App;