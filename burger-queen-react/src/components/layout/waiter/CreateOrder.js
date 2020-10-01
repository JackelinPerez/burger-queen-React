import React from 'react'
import {Table, Container, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

class Order extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container className="h-100">
                <Table responsive striped bordered hover variant="dark" className="text-center justify-content-center align-items-center">
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar producto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.order.map((ele, id)=>(
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{ele.name}</td>
                                <td>S/{ele.price}.00</td>
                                <td>
                                    <Button variant="outline-danger" onClick={()=>this.props.decrease(ele)}>-</Button>{' '}
                                    <Button variant="success"><strong>{ele.quantity}</strong></Button>{' '}
                                    <Button variant="outline-warning" onClick={()=>this.props.increase(ele)}>+</Button>{' '}
                                </td>
                                <td>S/{ele.subTotal}.00</td>
                                <td><Button variant="danger" onClick={()=>this.props.delete(ele)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colspan="4"><h4><strong>Total</strong></h4></td>
                        <td colspan="2"><h4><strong>S/{this.props.total}.00</strong></h4></td>
                    </tr>
                </tbody>
                </Table>
            </Container>
        )
    }
}

const mapStateToProps= (state) =>({
    order: state.order,
    total: state.total
})

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
    },
    delete(value){
        dispatch({
            type:'Eliminar_Producto',
            value
        })        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);