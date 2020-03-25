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
            <Card.Title>
              Card N° {this.state.ide} <br/>
              <strong>{this.props.job}</strong>
            </Card.Title>
            <Card.Text>
              Localidad: <strong>{this.props.locationNames}</strong><br/>
              puclicacion: {this.props.postedAt}
            </Card.Text>
            <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
}