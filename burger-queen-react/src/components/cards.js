import React from 'react';
import {Button, CardDeck, CardGroup} from 'react-bootstrap'
import {CardModel} from './card';

export class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: parseInt(this.props.id),
            element: []
        }
    }

    addCard () {
        this.setState((stateBack)=>{
            const newId = stateBack.id +1;
            const newElement = stateBack.element;
            return{ 
                id: newId,
                element: newElement.concat(<CardModel key={newId} id={newId}></CardModel>)}
        })
    }

    render(){
        return(
            <div>
                <CardDeck>{this.state.element}</CardDeck>
                <Button variant="info" onClick={()=>this.addCard()}>Agregar</Button>
            </div>
        )
    }
}