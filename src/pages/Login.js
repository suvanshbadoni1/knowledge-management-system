import React,{useState, useContext} from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordField from 'material-ui-password-field'
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext)
    let history = useHistory();

    const login = () =>{
        const data = {username:username,password:password};
        axios.post("http://localhost:3001/auth/login",data).then((response)=>{
            if(response.data.error) 
            {
                alert(response.data.error);
            }
            else
            {
                localStorage.setItem("accessToken",response.data.token);
                setAuthState(
                    { 
                    username:response.data.username, 
                    id:response.data.id,
                    status:true
                });
                history.push("/");
            }

        })
    };


    return (
        <div>

            <div style={{textAlign:'center'}}><h2 
            style={{fontWeight:'bold',fontSize:'50px',fontFamily:'ubuntu',color:'gray' }}>LOGIN</h2></div>
                <div className="formContainer">

                <div style={{paddingBottom:'0.8rem'}}/>
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
          id="input-with-icon-adornment"

          placeholder='Enter Username . . .'
          onChange={(event)=>{
            setUsername(event.target.value)
        }}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <div style={{paddingBottom:'2rem'}}/>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
       
        <PasswordField
            placeholder='Enter Password . . .'
            onChange={(event)=>{
                setPassword(event.target.value)
            }}  
            startAdornment={
                <InputAdornment position="start">
                 <VpnKeyIcon/>
                </InputAdornment>
              }
            />
            <div style={{paddingBottom:'2rem'}}/>




                    <button onClick={login} style={{borderRadius:'3rem',fontWeight:'bolder'}}>Login</button>
                </div>
        </div>
    )
}

export default Login
