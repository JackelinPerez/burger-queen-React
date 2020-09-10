import React, {useState, useEffect} from 'react'
import {auth} from '../../services/firebase/config'
import * as ROUTES from '../../utils/routes'
import {Redirect, useLocation} from 'react-router-dom'

/*
Archivo: Estado de sesión
Descripcion: Vista que permite saber el estado de sesion de los empleados
*/

class Status extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:false,
            path:'./'
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        auth.onAuthStateChanged(user => user ? this.setState({user, path: ROUTES.MENU}) : this.setState({user, path:ROUTES.LANDING}))
    }

    render(){
        return(
            this.state.user ? <Redirect  to={this.state.path}/> :  null
        )
    }
}

// const Status = () =>{
//     const location = useLocation();
//     const [path, setPath] = useState(location);
//     const [user, setUser] = useState(false);

//     useEffect( ()=> {

//         auth.onAuthStateChanged((user)=>{
//             if(user) {
//                 setPath(ROUTES.HOME);
//                 setUser(true);
//                 console.log('URL: '+path);
//                 console.log('Location now: '+ location.pathname);
//                 console.log('estado habilitado');
//             }
//             else {
//                 setUser(false);
//                 console.log('estado inhabilitado');
//             }
//         })
//     })

//     return(
//             user ? <Redirect  to={path}/> :  null
//     )
// }

export default Status;