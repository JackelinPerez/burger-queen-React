import React from 'react'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../../utils/routes'
import {auth} from '../../../services/firebase/config'


class NavbarWaiter extends React.Component{

    constructor(props){
        super(props)
    }

    logOuth(){
        auth.signOut()
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: "black"}}>
                <Navbar.Brand as={Link} to={ROUTES.MENU}>Burguer Queen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={ROUTES.ACCOMPANIMENT} >Acompañamiento</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.BREAKFAST} >Desayunos</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.DRINKS}>Bebidas</Nav.Link>
                </Nav>
                <Form inline>
                    {/* <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button> */}
                    <Nav.Link as={Link} to={ROUTES.LANDING} >
                        <Button variant="outline-warning" onClick={this.logOuth.bind(this)}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.354-7.646a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        </svg>
                        <strong>{this.props.count}</strong>
                        </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.LANDING} >
                        <Button variant="outline-danger" onClick={this.logOuth.bind(this)}>LogOut</Button>
                    </Nav.Link>
                </Form>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

const mapStateToProps= (state) =>({
    count: state.count
})

const mapDispatchToProps= (dispatch) =>({

})

export default connect(mapStateToProps, mapDispatchToProps) (NavbarWaiter);