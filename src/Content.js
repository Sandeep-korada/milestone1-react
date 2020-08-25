import React from 'react';
import login from './Login';
import signup from './signup';
import Home from './Home';
import {Switch,Route} from "react-router-dom";  
import AddProduct from './Addproduct';
import EditProduct from './EditProduct';
import ParentDashBoard from './ParentDashboard';
class Content extends React.Component {
    render() { 
        return ( 
            <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={login}></Route>
                <Route path='/signup' component={signup}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/EditProduct' component={EditProduct}></Route>
                <Route path='/Dashboard' component={ParentDashBoard}></Route>
            </Switch>
            </div>
         );
    }
}
export default Content;