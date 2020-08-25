import React from 'react';
import axios from "axios";
import './signup.css';

class signup extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id:0,
            name:'',
            emailid:'',
            username:'',
            password:'',
            confirmpassword:'',

            nameerror:'',
            usernameerror:'',
            passworderror:'',
            confirmpassworderror:'',
            emailerror:'',
            
            
        }
    }

    addUser=()=>{
        console.log('Add User via axios and post')
        let userRequestBody = {
            
            "name": this.state.name,
            "emailid": this.state.emailid,
            "username":this.state.username,
            "password":this.state.password,
            "confirmpassword":this.state.confirmpassword
        }
        axios.post('http://localhost:3000/allusers', userRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/login')
                }, error=>{
                    console.error(error);
                })
    }
    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }
    getMailId=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({emailid: event.target.value})
    }
    getUserName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }
    getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }
    getConfirmPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({confirmpassword: event.target.value})

    }
    getNameError=(event)=>{
        this.setState({name:event.target.value})
        this.checkValidation('name')
    }
      getUserNameError=(event)=>{
        this.setState({username:event.target.value})
        this.checkValidation('username')
    }
    getPasswordError=(event)=>{
        this.setState({password:event.target.value})
        this.checkValidation('password')
    }
    getConfirmPasswordError=(event)=>{
        this.setState({confirmpassword:event.target.value})
        this.checkValidation('confirmpassword')
    }
    getEmailError=(event)=>{
        this.setState({emailid:event.target.value})
        this.checkValidation('emailid')        
    }
    checkValidation=(event)=>{
        let nameError=''
        let userNameError=''
        let passwordError=''
        let confirmpasswordError=''
        let emailError=''
        
        if(event==='name' && this.state.name===''){
          
            nameError=<p style={{color:'red'}}> Name is Required</p>
        }
       
        if(event==='username' && this.state.username===''){
          
            userNameError=<p style={{color:'red'}}>User Name is Required</p>
        }
        else if(event==='password' && this.state.password===''){
            passwordError=<p style={{color:'red'}}>Password is Required</p>
        }

       else if(event==='confirmpassword' && (this.state.confirmpassword==='' ||this.state.password !=this.state.confirmpassword)){
            confirmpasswordError=<p style={{color:'red'}}>confirm Password is Mismatching</p>
        }
       else if(event==='emailid' && this.state.emailid===''){
            emailError=<p style={{color:'red'}}>Email is Required</p>
        }
      
        if(nameError||userNameError||passwordError||confirmpasswordError||emailError){
           
            
            this.setState({
                nameerror:nameError,
                usernameerror:userNameError,
                passworderror:passwordError,
                confirmpassworderror:confirmpasswordError,
                emailerror:emailError,
                
                
            })
            return false
        }
        
        this.setState({
            nameerror:'',
            usernameerror:'',
            passworderror:'',
            confirmpassworderror:'',
            emailerror:'',
            
            
        })
        return true
    }
   
    render() { 
        return ( 
            <div className="signupbg">
                 <div className="transbox">
              
              <form>
                  <h2>REGISTER</h2><hr></hr>
                    <h3>Name</h3>
                    <input type="text" placeholder="Enter name" id="name" onChange={this.getName} onBlur={this.getNameError}></input>
                    {this.state.nameerror}

                    <h3>EmailId</h3>
                    <input type="text" placeholder="Enter EmailId" id="usermailid" onChange={this.getMailId} onBlur={this.getEmailError}></input>
                    {this.state.emailerror}

                    <h3>UserName</h3>
                    <input type="text" placeholder="Enter UserName" id=" username" onChange={this.getUserName} onBlur={this.getUserNameError}></input>
                    {this.state.usernameerror}

                    <h3>Password</h3>
                    <input type="password" placeholder="Enter Password" id=" password"  onChange={this.getPassword} onBlur={this.getPasswordError}></input>
                    {this.state.passworderror}

                    <h3>Confirm Password</h3>
                    <input type="password" placeholder="Enter Confirm Password" id=" confirmPassword" onChange={this.getConfirmPassword} onBlur={this.getConfirmPasswordError}></input>
                    {this.state.confirmpassworderror}

                    <br></br><br></br>
                    <button type="submit" onClick={this.addUser} value="Submit">Submit</button>
                </form>
</div>
            </div>
         );
    }
}
export default signup;