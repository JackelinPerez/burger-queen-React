import React from 'react'
import NavbarWaiter from '../layout/waiter/Navbar'
import Menu from '../layout/waiter/Menu'
import Order from '../layout/waiter/CreateOrder'

import * as ROUTES from '../../utils/routes'
import {Switch, Route} from 'react-router-dom'
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
                    <Route path={ROUTES.MENU}><Menu data={filter(data,'menu')}/></Route>
                    <Route path={ROUTES.BREAKFAST}><Menu data={filter(data,'breakfast')}/></Route>
                    <Route path={ROUTES.DRINKS}><Menu data={filter(data,'drinks')}/></Route>
                    <Route path={ROUTES.ACCOMPANIMENT}><Menu data={filter(data,'accompaniment')}/></Route>
                    <Route path={ROUTES.ORDER}><Order/></Route>
                </Switch>
            </div>
        )
    }
}

export default Home;