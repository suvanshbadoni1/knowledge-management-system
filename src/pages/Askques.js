import axios from 'axios';
import { useEffect , useState } from 'react';
import Answer from './Answer';
import React from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field,ErrorMessage} from  'formik';
import {useHistory,useParams} from 'react-router-dom';
import mail1 from '../images/mail1.gif'
import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import {Accordion,Card,Button,Col,Row,Image} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import think from '../images/think.gif'
import think1 from '../images/think2.gif'

function Askques() {
  let state={

    curTime : new Date().toLocaleString(),

  }
  const [dateState, setDateState] = useState(new Date());
  
  const [name,setName] = useState('');
const [title,setTitle] = useState('');
  let {username}= useParams();
  let history = useHistory();
  const [listOfAsks,setListOfAsks] = useState([]);
  const [listOfPosts,setListOfPosts] = useState([]);
  const [listusers, setListusers] =useState([]);
  const initialValues ={
    question:'',
    askTo:''
};
    const validationSchema =Yup.object().shape({
      question:Yup.string().required("You must input a question"),
      askTo:Yup.string().required("You must enter username"), 
    });  


      useEffect(() => {
        if(!localStorage.getItem('accessToken')){
          history.push('/login');
      } 
      else{
        axios.get(`http://localhost:3001/ask/byusername/${username}`).then((response)=>{
            setListOfAsks(response.data)
        })
        axios.get(`http://localhost:3001/auth/searchuser`,
        {headers:{accessToken:localStorage.getItem('accessToken')},}).then((response)=>{
        setListusers(response.data);
    })
    axios.get("http://localhost:3001/posts",{headers:{accessToken:localStorage.getItem('accessToken') } }).then((response)=>{
      setListOfPosts(response.data.listOfPosts);
    });
      }

		setInterval(() => {
			console.log('watching');
			setDateState(new Date());
		}, 30000);
            
      },[]);

      const searchele={borderWidth:'1px',textAlign:'center',width:'22rem',borderRadius:'10rem'}
 
      const onSubmit1=(data)=>{
        axios.post("http://localhost:3001/ask/",data,{headers:{accessToken:localStorage.getItem('accessToken')},
    })
    .then((response)=>{
            console.log("IT WORKED");})
            alert('Question sended')
            //history.push('/');
            window.location.reload();            
    };

    const [show, toggleShow] = useState(false);
      var str = username;
      const styledt = {textAlign:'left',fontWeight:'bolder',fontSize:'30px',width:'300px',paddingTop:'2rem'};
    var res = str.toUpperCase(); 
    return (
        <div>
          <Row>
            <Col style={{textAlign:'center'}} ><div style={styledt}>
				{dateState.toLocaleDateString('en-GB', {day: 'numeric',	month: 'short',	year: 'numeric',})}
            </div>
            <br/>
            <div>
            <input
      style={searchele}
       type='text' placeholder='Search User-Name. . . ' 
          onChange={(event) => setName(event.target.value)}
           name="name" />
            {listusers.map((value,key)=>{
              if(name==''){
                  return(
                    <div>
                      </div>
                  )
              }
              else if(name.toLowerCase()!=value.username.toLowerCase()){
              return (<div  style={{textAlign:'center'}}>
                             </div>)
              }
              else if (value.username.toLowerCase().includes(name.toLowerCase())){
                return <div  style={{textAlign:'center'}}>
                  <Link to={`/profile/${value.id}`}>{name}</Link></div>
              }
              
            })}


      </div>
      <div>
        <img src={think1} width='300px'/>
      </div>        
            </Col>
            <Col>
            <div style={{alignItems:'center',alignContent:'center',fontFamily:'bolder'}}>
              <br/>
              <img src ={mail1} height='174rem' style={{paddingBottom:'1rem'}}/>
                <div>
      <button style={{background:'lightgreen',borderRadius:'2rem',borderWidth:'1rem'}} 
      onClick={() => toggleShow(!show)}>Queries by people to you :  
      {show ? '- Hide' : '- Show'}</button>    
      {show && <div>            {listOfAsks.map((value,key)=>{
                          const ti=value.question;
                          return (
                          <div key={key} >
                    <Card style={{ width: '25rem',borderRadius:'1rem' }}>
  <Card.Body>
                            {key+1}
                            <div>{value.question}</div>
                            <div >by : {value.username}</div>
                            
                            <Accordion>
                        <Card>
                          <Card.Header style={{textAlign:'center'}}>
                            <Accordion.Toggle variant="link"
                             eventKey="0" style={{background:'lightblue', width: '15rem' ,height:'2rem'}}>
                            Answer the question      
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0" >
                            <Card.Body style={{textAlign:'center'}}>

                          <Answer title={ti} askid={value.id}/>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                            </Accordion>
    </Card.Body>
                     </Card>
                          </div>
                            );
                      })}</div>}
    </div>

                  </div> 

            <div style={{paddingTop:'30px'}}>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit1} 
                validationSchema={validationSchema}
                >
                <Form className="formContainer">
                    <label>Ques :- </label>
                    <ErrorMessage name="question" component='span'/>
                    <Field
                        autocomplete='off' 
                        id='inputCreatePost' 
                        name='question' 
                        placeholder='Enter Question you want to ask...'
                    />
                    <label>User-Name :- </label>
                    <ErrorMessage name="askTo" component='span'/>
                   
                  <Field 
                        autocomplete='off'
                        id='inputCreatePost' 
                        name='askTo' 
                        placeholder='Want to ask from ...'
                    />
                   
                    <button type="submit1"> Ask Question</button>
                </Form>
            </Formik>  
            </div>
            </Col>
            <Col style={{textAlign:'center'}} ><div style={styledt}>
					
              {dateState.toLocaleString('en-US', {
					minute: 'numeric',
					hour12: true,
          hour: 'numeric',  
				})}
        </div>
    <br/>
    <div >
        <input type='text' style={searchele}
      placeholder='Search Ques. . . ' 
          onChange={(event) => setTitle(event.target.value)}
           name="title" />
           {listOfPosts.map((value,key)=>{    
              if((title==''|| title==null)){
                return (<div></div>)
              }
              else if(title.toLowerCase()!=value.title.toLowerCase()){
                return (<div style={{textAlign:'center'}}>
                                
                  </div>)
                }
                else if (value.title.toLowerCase().includes(title.toLowerCase())){
                  return <div style={{textAlign:'center'}}>
                    <Link to={`/post/${value.id}`}>{title}</Link></div>
                }
              })}
      </div>
      <div>
        <img src={think} width='300px'/>
      </div>
            </Col>  
            </Row>      
        </div>
    )
}

export default Askques
