import React from 'react';
import Cards from './cards';
import {CardGroup} from 'react-bootstrap'

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <CardGroup key={this.props.key} className="justify-content-md-center">
                    <Cards list={this.props.data}></Cards>
                </CardGroup>
        )
    }
}

export default Menu;