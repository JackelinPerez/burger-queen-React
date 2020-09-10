import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { isValidElement } from 'react';

class Cards extends React.Component{
constructor(props){
    super(props);
    this.state = {};
    [...this.props.list].forEach((ele)=> this.state[ele.id]=0)
}

increase(id, value){
        this.setState({[id]: ++value});
}

decrease(id, value){
    if(this.state[id]>0)
        this.setState({[id]: --value});
}

render(){
    return(
        this.props.list.map((ele, id)=>{
            return(
                <div>
                    <Card key={id} style={{ width: '22.5rem', height:'27rem', background:'rgba(0, 0, 0, 0.8)'}}>
                        <Card.Img  variant="top" src={ele.image} style={{ width: '100%', height:'60%'}}></Card.Img>
                        <Card.Body style={{textAlign:'center', color:'white'}}>
                            <Card.Title><strong>{ele.name}</strong></Card.Title>
                            <h3 style={{color:'#FDBB4B'}}><strong>S/. {ele.price}</strong></h3>
                            <Button variant="outline-primary" size="lg" onClick={()=>this.decrease(ele.id, this.state[ele.id])}>-</Button>
                            <Button variant="success" size="lg">{this.state[ele.id]}</Button>
                            <Button variant="outline-danger" size="lg" onClick={()=>this.increase(ele.id, this.state[ele.id])}>+</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    )
}

}

export default Cards;