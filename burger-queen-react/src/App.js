import React from 'react'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Status from './components/auth/Status'
import Home from './components/home/home'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as ROUTES from './utils/routes'
import './App.css'

class App extends React.Component{
    render(){
        return(
            <div className="App-background">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={SignIn}/>
                        <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                        <Route path={ROUTES.HOME} component={Home}/>
                    </Switch>
                    <Status></Status>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;