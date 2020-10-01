import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

class Cards extends React.Component{

    constructor(props){
        super(props);
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
                                    <h3 style={{color:'#FDBB4B'}}><strong>S/ {ele.price}.00</strong></h3>
                                    <Button variant="outline-primary" size="lg" onClick={()=>this.props.decrease(ele)}>-</Button>{' '}
                                    <Button variant="success" size="lg"><strong>{ele.quantity}</strong></Button>{' '}
                                    <Button variant="outline-danger" size="lg" onClick={()=>this.props.increase(ele)}>+</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
        )
    }
}

const mapStateToProps= (state) =>{
    return state
}

const mapDispatchToProps= (dispatch) =>({
    increase(value){
        dispatch({
            type:'Agregar_Item',
            value
        })
    },
    decrease(value){
        dispatch({
            type:'Eliminar_Item',
            value
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Cards);