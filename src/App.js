import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom'
import "../public/css/main.css"
import NavBar from './Components/UI/NavBar/NavBar'
import Home from './Components/Home/Home'
import Animaux from './Containers/Animaux/Animaux'
import Continents from './Components/Continents/Continents'


class App extends Component {
    render(){
        return (
            <div id="app">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/animals">
                        <Animaux />
                    </Route>
                    <Route path="/continents">
                        <Continents />
                    </Route>
                </Switch>
            </div>
        )

    }

}

export default App
