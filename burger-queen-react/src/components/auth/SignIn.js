import React from 'react'
import {Form, Button, Nav, Alert, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../utils/routes'

import {auth} from '../../services/firebase/config'
import './Auth.css'

/*
Archivo: Inicio sesion de los empleados
Descripcion: Vista que permite loguearse por tipo de usuario
*/

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            alert:null
        }
    }

    handleChangeForm(event){
        let id = event.target.id;
        let value = event.target.value;
        this.setState({[id]:value});
    }

    signIn(){
        // Object.keys(this.state).map(ele=>console.log('key=['+ ele + '] value=['+ this.state[ele]+']'));
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            this.setState({alert:'¡Se creo correctamente su usuario!'})
        }).catch((err)=>{
            this.setState({alert:err})
        })
    }

    render(){
        return(
                <div className="size-auth">
                    <Container className="h-100 text-center">
                        {this.state.alert?<Alert variant='danger'>{this.state.alert.message}</Alert>:null}
                        <Row className="h-100 justify-content-center align-items-center">
                            <Col lg={5} className="style-auth">
                                <div class="mt-5">
                                    <h1><strong>Iniciar sesión</strong></h1>
                                </div>
                                <Form onChange={this.handleChangeForm.bind(this)} className="m-5">
                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder="usuario"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder="contraseña"></Form.Control>
                                    </Form.Group>
                                    <Button variant="success" onClick={()=>this.signIn()}>Iniciar</Button>
                                    <Nav className="justify-content-md-center">
                                    <Nav.Item>
                                    <br/><label>¿Aún no te haz registrado?</label><br/>
                                    <Link to={{pathname:ROUTES.SIGN_UP, ...this.state}}>Haz click aqui!</Link>
                                    </Nav.Item>
                                    </Nav>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
        )
    }
}

export default SignIn;