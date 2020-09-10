import React from 'react'
import {Form, Button, Container,Row,Col, Alert} from 'react-bootstrap'
import './Auth.css'

import * as ROUTES from '../../utils/routes'
import {auth} from '../../services/firebase/config'

/*
Archivo: Registro de cuenta de los empleados
Descripcion: Vista que permite crear un cuenta segun el tipo de usuario
*/


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            alert: null,
            path: ROUTES.SIGN_UP
        };
    }

    handleForm(event){
        let id = event.target.id;
        let value = event.target.value;
        this.setState({[id]:value});
    }

    async getForm(){
        await auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            console.log('Se grabo el usuario!');
            Object.keys(this.state).map(ele=>console.log('SignUp key=['+ ele + '] value=['+ this.state[ele]+']'));

        }).catch((error)=>{
            this.setState({alert:error})
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log('Code: '+ errorCode+'; Message: '+errorMessage);
        });
    }

    render(){
        return(
            <div className="auth-background">
                <Container className="h-100 text-center">
                    {this.state.alert?<Alert variant='danger'>{this.state.alert.message}</Alert>:null}
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col lg={5} className="content-style">
                            <div class="mt-5">
                                <h1><strong>Registrarse</strong></h1>
                            </div>
                                {/* <Form onChange={this.handleForm.bind(this)} onSubmit={this.getForm.bind(this)} className="form-style"> */}
                                <Form onChange={this.handleForm.bind(this)} className="m-5">
                                    <Form.Group controlId="type">
                                        <Form.Control as="select">
                                            <option>Tipo de usuario</option>
                                            <option>Cocinero</option>
                                            <option>Mesero</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder="email"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder="password"></Form.Control>
                                    </Form.Group>
                                    <Button variant="danger" onClick={()=>this.getForm()}>Guardar</Button>
                                    {/* <Button variant="danger" type="submit">Guardar</Button> */}
                                </Form>
                        </Col>
                    </Row>
                </Container>                
            </div>
        )
    }
}


export default SignUp;