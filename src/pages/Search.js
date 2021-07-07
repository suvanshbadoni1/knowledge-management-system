import React from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect , useState } from 'react';
import {Link, useHistory,useParams} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Accordion,Card,Button,Col,Image} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import search from '../images/search.gif';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1.3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

function Search() {
  const searchele={borderWidth:'1px',textAlign:'center',width:'22rem',borderRadius:'10rem'}
  const [listOfPosts,setListOfPosts] = useState([]);
  let history = useHistory()
  const [listusers, setListusers] =useState([]);
  useEffect(() => {
    if(!localStorage.getItem('accessToken')){
      history.push('/login');
    }
    else{
    axios.get(`http://localhost:3001/auth/searchuser`,
    {headers:{accessToken:localStorage.getItem('accessToken')},}).then((response)=>{
        setListusers(response.data);
    })
    axios.get("http://localhost:3001/posts",{headers:{accessToken:localStorage.getItem('accessToken') } }).then((response)=>{
      setListOfPosts(response.data.listOfPosts);
    });
  }
}, []);
const [name,setName] = useState('');
const [title,setTitle] = useState('');
function sho(str){
  setName(str)
}
return (

        <div>

<div>
<div style={{paddingTop:'0.2px',
                position: 'center',
                textAlign:'center',
                fontStyle:'bolder',
                fontFamily:'bolder',
                paddingBottom:'0.2rem',
                paddingTop:'2rem'
                }}>       <h2>SEARCH</h2><br></br>
                  <img src={search} height='200rem' width='300rem'/>
                   </div>    
<Accordion>
  <Card>
    <Card.Header style={{alignContent:'center',alignItems:'center',textAlign:'center',height:'4rem',width:'30rem'}}>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Box>Search Username </Box>     
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0" >
      <Card.Body style={{textAlign:'center'}}>
      <input
      style={searchele}
       type='text' placeholder='Search . . . ' 
          onChange={(event) => setName(event.target.value)}
           name="name" />
           <SearchIcon/>
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


      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header style={{alignContent:'center',alignItems:'center',textAlign:'center',height:'4rem',width:'30rem'}}>
    <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <Box>Search By Article Title </Box>     
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body style={{textAlign:'center'}}>
      <input type='text' style={searchele}
      placeholder='Search . . . ' 
          onChange={(event) => setTitle(event.target.value)}
           name="title" />
            <SearchIcon/>
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
      </Card.Body>
    </Accordion.Collapse>
  </Card>


</Accordion>


         </div> 
        </div>
)
}

export default Search
