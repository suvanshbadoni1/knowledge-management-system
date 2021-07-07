import React,{useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from  'formik';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function Registration() {
    let history = useHistory();
    const [file, setFile] = useState('');
 const [postText, setPostText] = useState("");
 const [loading,setLoading] = useState(false);
 const [image,setImage] = useState('');
 const uploadImage=async e=>{
    const files = e.target.files
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset','knowledge')
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/ddkmvpf5w/image/upload",
    {
      method:'POST',
      body:data
    })
    const file = await res.json()
    console.log(file)
    setImage(file.secure_url)
    alert(file.secure_url)
    setLoading(false);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
    const initialValues ={
        username:'',
        fullname:'',
        gender:'',
        age:"",
        phoneno:"",
        address:"",
        desination:"",
        experience:"",
        password:"",
        profile:''
    };

    const validationSchema =Yup.object().shape({
        username:Yup.string().min(3).max(45).required("please enter valid username"),    
        password:Yup.string().min(4).max(25).required("please enter valid password"),
        
    });  

    const onSubmit=(data) =>{
        data.profile=image;
        axios.post("http://localhost:3001/auth",data).then(()=>{
            alert("account created of "+data.username);
            console.log(data);
            history.push('/login')
        })
    }
    const classes = useStyles();

    return (
        <div>
            <div className="register_head" style={{textAlign:'center'}}><h2         
                style={{fontWeight:'bold',fontSize:'50px',fontFamily:'ubuntu',color:'gray' }}>
                Registration</h2></div>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}>
                <Form className="formContainer">
               <InputLabel style={{fontWeight:'bolder'}}>Username</InputLabel>
                    <ErrorMessage name="username" component='span'/>
                    <Field
                    label='user--name'
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='username' 
                        placeholder='Enter UserName...'
                        />
                        
 <div style={{paddingBottom:'1rem'}}/>
                <InputLabel style={{fontWeight:'bolder'}}>Full-Name</InputLabel>
                    <Field
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='fullname' 
                        placeholder='Enter Full_Name...'
                        required
                        />

<div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Gender</InputLabel>
<Field
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='gender' 
                        placeholder='Enter Gender...'
                        required
                        />


<div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Date Of Birth</InputLabel>
                    <Field
                        autocomplete='off'
                        type="date" 
                        id='inputCreatePost' 
                        name='age' 
                        placeholder='Enter an Age...'
                        required
                        />
                    
                    <div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Phone-No</InputLabel>
                    <Field
                        autocomplete='off' 
                        id='inputCreatePost' 
                        type="tel"
                        name='phoneno' 
                        placeholder='Enter Phone number ...'
                        required
                        />

<div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Address</InputLabel>
                    <Field 
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='address' 
                        placeholder='Enter Full_Address ...'
                        required/>
                            
                            <div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Desination</InputLabel>
                    <Field
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='desination' 
                        placeholder='Enter you designation ongc...'
                        />
                     <div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Works from</InputLabel>
                    <Field
                        autocomplete='off' 
                        id='inputCreatePost'
                        type='date' 
                        name='experience' 
                        placeholder='Enter experience in years...'
                        />

<div style={{paddingBottom:'1rem'}}/>
<InputLabel style={{fontWeight:'bolder'}}>Password</InputLabel>
                    <ErrorMessage name="password" component='span'/>
                    <Field
                        autocomplete='off'
                        type="password"
                        id='inputCreatePost' 
                        name='password' 
                        placeholder='Enter your password...'
                        />
                         <div style={{paddingBottom:'1rem'}}/>
                    <InputLabel style={{fontWeight:'bolder'}}>
                            Select File
                        </InputLabel>
                    <div>
                        <Input type="file" name="file" onChange={uploadImage}
                            />
        </div>
        {image?(loading?(
          <div>Uploading...</div>
        ):(
          <img src={image} style={{paddingTop:'3px',width:'140px',height:'40px'}}/>
        )):(null)
      }
 
        <div style={{paddingBottom:'1rem'}}/>
                    <button style={{borderRadius:'2rem',fontWeight:'bolder', transform: 'scale(1.3)',
                    TransitionEvent: '0.5s',cursor:'pointer'}}
                    
                    type="submit">Register An Account</button>

                </Form>
            </Formik>
        </div>
    )
}

export default Registration
