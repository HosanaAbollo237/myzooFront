import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import "../public/css/main.css"
import Site from './Containers/Site/Site'


class App extends Component {
    render(){
        return (
            <div id="app">
                <Site />
            </div>
        )

    }

}

export default App
