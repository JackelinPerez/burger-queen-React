import React from 'react'
import NavbarWaiter from '../layout/waiter/Navbar'
import Menu from '../layout/waiter/Menu'
import Status from '../../components/auth/Status'

import * as ROUTES from '../../utils/routes'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {data} from '../../data/menu'
import './home.css'

const filter = (array, dataFilter) =>{
    return array.filter(ele => ele.category === dataFilter)
}

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <NavbarWaiter/>
                <Switch>
                    <Route path={ROUTES.MENU}><Menu key='menu' data={filter(data,'menu')}/></Route>
                    <Route path={ROUTES.BREAKFAST}><Menu key='breakfast' data={filter(data,'breakfast')}/></Route>
                    <Route path={ROUTES.DRINKS}><Menu key='drinks' data={filter(data,'drinks')}/></Route>
                    <Route path={ROUTES.ACCOMPANIMENT}><Menu key='accompaniment' data={filter(data,'accompaniment')}/></Route>
                </Switch>
            </div>
        )
    }
}

export default Home;