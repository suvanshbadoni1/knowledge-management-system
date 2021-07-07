import React, { useState } from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from  'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../helpers/AuthContext';
import { useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import AttachmentIcon from '@material-ui/icons/Attachment';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import InputLabel from '@material-ui/core/InputLabel';
import TitleIcon from '@material-ui/icons/Title';
import InputAdornment from '@material-ui/core/InputAdornment';

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
function Answer(props) {
    let history = useHistory();
 const [title, setTitle] = useState("");
 const [file, setFile] = useState('');
 const [postText, setPostText] = useState("");
 const [loading,setLoading] = useState(false);
 const [image,setImage] = useState('');

 const ondel=()=>{
        axios.delete(`http://localhost:3001/ask/deask/${props.askid}`,
        {headers:{
            accessToken:localStorage.getItem('accessToken')
        },
        }).then(()=>{
          // alert("your soution posted and question deleted successfully")
        });
    }
 
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
        title: `${props.title}`,
        postText: postText,
        postattach: image,
        }      
        submitForm("application/json", data, (msg) => console.log(msg));
        history.push('/');
 }
 return (
 <div>
     <h2>Create An Article</h2>
        <div style={{textAlign:'center'}}> 

    <InputLabel style={{fontWeight:'bolder'}}>
      Solution : -
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
         <div style={{paddingBottom:'0.1rem'}}/>
    <InputLabel style={{fontWeight:'bolder'}}>
        Select File
    </InputLabel>
 <div>
     <Input type="file" name="file" onChange={uploadImage}
        />
        </div>

 <div style={{paddingBottom:'0.3rem'}}/>
 <button style={{borderRadius:'1rem',fontWeight:'bolder',background:'gray' ,width:'14rem'}} 
                    type="submit" value="Upload as JSON" onClick={()=>{uploadWithJSON(); ondel();}}
                    >Send Solution as a post
                    </button>
 
 </div>
 </div>
 );
}
export default Answer;