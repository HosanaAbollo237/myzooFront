import React from 'react'
import NavBar from '../../Components/UI/NavBar/NavBar'
import {Switch, Route} from 'react-router-dom'
import Park from './../Site/Park/Park'
import Home from './Home/Home'
import Footer from '../../Components/Footer/Footer'
import Error from '../../Components/Error/Error'
import Continents from '../../Components/Continents/Continents'
import Contact from '../../Components/Contact/Contact'
//import GetApiData from '../../Components/GetApiData/GetApiData'

const Site = () => {

    return(
        <div className="site">
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/animals">
                <Park />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/continents">
                <Continents />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
        <div className="miniSite"></div>
    </div>
    )
}



export default Site