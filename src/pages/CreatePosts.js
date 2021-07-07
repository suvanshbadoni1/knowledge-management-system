import React, { useState } from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from  'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../helpers/AuthContext';
import { useContext, useEffect } from 'react';
import {Accordion,Card,Button,Col,Row,Image} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TitleIcon from '@material-ui/icons/Title';
import InputAdornment from '@material-ui/core/InputAdornment';
import post2 from '../images/posts2.gif';
import post3 from '../images/posts3.gif';
import FavoriteIcon from '@material-ui/icons/Favorite';


function submitForm(contentType, data, setResponse) {

    axios.post("http://localhost:3001/posts",data
    ,{headers:{accessToken:localStorage.getItem('accessToken')},
}).then((response) => {
 setResponse(response.data);
 }).catch((error) => {
 setResponse("error");
 })
alert('Article Published');

}
function CreatePosts() {
    let history = useHistory();
 const [title, setTitle] = useState("");
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

 async  function uploadWithJSON(){
             
        const data = {
        title: title,
        postText: postText,
        postattach: image,
        }      
        submitForm("application/json", data, (msg) => console.log(msg));

        window.location.reload();
        history.push('/');
 }
 return (
 <div>
   <Row>
     <Col style={{paddingTop:'6rem'}}>
     <img src={post2} width='400px' style={{borderRadius:'2rem',border:'1px solid #57c0e8'}}/>
     </Col>
     <Col>
     <h2 style={{textAlign:'center',fontWeight:'bolder' ,color:'gray'}}>Create An Article</h2>
        <div className="formContainer" style={{textAlign:'center',background:'#F5F5F5'}}> 

 <InputLabel style={{fontWeight:'bolder'}}>Title</InputLabel>
 <Input 
        id="input-with-icon-adornment"
        vaue={title} 
        onChange={(e) => { setTitle(e.target.value )}} 
        placeholder="Give a title to your Article ... " 
        startAdornment={
            <InputAdornment position="start">
            <TitleIcon style={{color:'black'}}/>
            </InputAdornment>
        }
        required/>
 <div style={{paddingBottom:'2rem'}}/>
   
    <InputLabel style={{fontWeight:'bolder'}}>
      Post Text 
    </InputLabel>
    <div>
 <TextFieldsIcon/>
 <TextField multiline
          rows={4} defaultValue="Default Value"
          value={postText} 
          onChange={(e) => setPostText(e.target.value)}
          required
         ></TextField>
         </div>
 <div style={{paddingBottom:'2rem'}}/>
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
 <div style={{paddingBottom:'2rem'}}/>
 <button style={{borderRadius:'3rem',fontWeight:'bolder'}} 
                    type="submit"value="Upload as JSON" onClick={uploadWithJSON}
                    >Article Published</button>
 
 </div>
 </Col>
 <Col style={{paddingTop:'6rem'}}><img src={post3} 
 style={{borderRadius:'2rem',  border:'1px solid #57c0e8'}} width='400px'/></Col>
 </Row>
 </div>
 );
}
export default CreatePosts;