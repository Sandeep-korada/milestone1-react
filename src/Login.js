import React from 'react';
import './Login.css';
import axios from 'axios';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginStatus:false,
            
            
            userNameError:'',
            passwordError:''
        }
    }
    componentWillMount(){
        if(localStorage.getItem('loggedIn')){
            localStorage.removeItem('loggedIn');
        }
    }
    
    initialstate=()=>{
        setTimeout(() => {
            this.setState({ loginStatus: false });
        }, 2000)
    }
    
    initialstateregisterd=()=>{
        setTimeout(() => {
            this.setState({ isRegistered: false });
        }, 2000)
    }
    
    
    getLogin=(event)=>{
        
        axios.get('http://localhost:3000/allusers/?q='+this.state.username).then((res)=>{
            console.log(res.data[0]);
            if(res.data[0]){
               if((res.data[0].username === this.state.username && res.data[0].password === this.state.password)||(res.data[0].email === this.state.username && res.data[0].password === this.state.password)){
                   localStorage.setItem('loggedIn',true);
                   this.props.history.push('/');
                }else{
                   this.setState({loginStatus:true});
                   this.initialstate();
                }
            }else{
               this.setState({loginStatus:true});
               this.initialstate();
            }
          
        })  
    }
    getUserName=(event)=>{
        this.setState({username:event.target.value})
    }
    getPassword=(event)=>{
        this.setState({password:event.target.value})
    }
    getUserNameError=(event)=>{
        this.setState({username:event.target.value})
        this.checkValidation('username')
    }
    getPasswordError=(event)=>{
        this.setState({password:event.target.value})
        this.checkValidation('password')
    }
    checkValidation=(event)=>{
        let userNameError='';
        let passwordError='';
        if(event==='username' && this.state.username ===''){
            userNameError=<p style={{color:'red'}}>Username is required</p>;
        }
        if(event==='password' && this.state.password ===''){
            passwordError=<p style={{color:'red'}}>Password is required</p>
        }
        if (userNameError || passwordError) {
           this.setState({
               userNameError: userNameError,
               passwordError: passwordError,
           })
           return false
       }
       this.setState({
           userNameError: '',
           passwordError: '',
       })
       return true
    }

    render() { 
        return ( 
            
            <div className="center">
                <div className="transbox">
               
                <form onSubmit={this.getLogin}>
                <h2>LOGIN</h2><hr></hr>
                { this.state.loginStatus &&
                        <p style={{color:'red'}}><b>Invalid Login Credentials</b></p>
                    }
                    <h3>Username</h3>
                    <input type="text" placeholder="Enter Username" onChange={this.getUserName} onBlur={this.getUserNameError} required></input>
                    {this.state.userNameError}

                    <h3>Password</h3>
                    <input type="password" placeholder="Enter Password" onChange={this.getPassword} onBlur={this.getPasswordError} required></input>
                    {this.state.passwordError}
                    <br></br><br></br>
                    <button type="submit" value="Submit">Submit</button>
                    
                </form>
              
                </div>

            </div>
         );
    }
}
export default Login;