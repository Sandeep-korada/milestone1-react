import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './navbar.css';
class Navbar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
logout=(e)=>{
    localStorage.removeItem("loggedIn")
    this.props.history.push('/')
    
}

   
    render(){
       let loggedIn=localStorage.getItem("loggedIn")
             
       
        return(

            <div className="navbarbg"> 
           
           
                <ul className="navbarbg" >
                    { loggedIn && 
                    <div>
                        <li className="rightbg"><button onClick={this.logout}>LogOut</button></li>
                    <li className="navpbg">Product Inventory System</li>
                    <li className="rightbg">
                        <button><Link to='/'>Home</Link></button>
                    </li>
                    <li className="rightbg">
                        <button><Link to="/Dashboard">DashBoard</Link></button>
                </li>
                
                </div>
                }   
                 {!loggedIn && 
                 <div>
                     <li className="navpbg">Product Inventory System</li>
                    <li className="rightbg">
                        <button><Link to='/signup'>Signup</Link></button>
                    </li>
                    <li className="rightbg">
                        <button><Link to='/login'>Login</Link></button>
                    </li>
                    </div>
    }
                </ul>
                <br></br>
            </div>
           
        )
    }
}
export default withRouter(Navbar);