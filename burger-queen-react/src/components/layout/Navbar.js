import React from 'react'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../utils/routes'
import {auth} from '../../services/firebase/config'

class NavbarGeneral extends React.Component{

    logOuth(){
        auth.signOut()
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to={ROUTES.LANDING}>Burguer Queen</Navbar.Brand>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    <Nav.Link as={Link} to={ROUTES.LANDING} >
                        <Button variant="outline-danger" onClick={this.logOuth.bind(this)}>LogOut</Button>
                    </Nav.Link>
                </Form>
          </Navbar>
        )
    }
}

export default NavbarGeneral;