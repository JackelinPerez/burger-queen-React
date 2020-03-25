import React from 'react';
import {Button, Card} from 'react-bootstrap';
import jk from '../img/img_6374.jpg';

export class CardModel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        ide: this.props.id
    }
  }
    render() {
      return (
        <div>
          <Card style={{ width: '18rem'}}>
            <Card.Img alt="logo" src={jk} />
            <Card.Body> 
            <Card.Title>Card N° {this.state.ide}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
}