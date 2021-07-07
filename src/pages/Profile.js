import React,{useState,useEffect} from 'react'
import {Link,useParams,useHistory} from 'react-router-dom'
import axios from 'axios'
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import {Card,Jumbotron} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Col,Row} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft:'15rem',
    paddingRight:'15rem'
  },
  paper: {
    padding: theme.spacing(1.3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


function Profile() {
    let {id} = useParams();
    let history = useHistory();
    const [likedPosts, setLikedPosts] = useState([]);
    const [username, setUsername] =useState('');
    const [fullname, setFullname] =useState('');
    const [gender, setGender] =useState('');
    const [age, setAge] =useState('');
    const [phoneno, setPhoneno] =useState('');
    const [address, setAddress] =useState('');
    const [desination, setDesination] =useState('');
    const [experience, setExperience] =useState('');
    const [listOfPosts,setListOfPosts] = useState([]);
    const [profile,setProfile] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response)=>{
            setUsername(response.data.username);
            setFullname(response.data.fullname);
            setGender(response.data.gender);
            setAge(response.data.age);
            setPhoneno(response.data.phoneno);
            setAddress(response.data.address);
            setDesination(response.data.desination);
            setExperience(response.data.experience);
            setProfile(response.data.profile);
        })
        axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response)=>{
            setListOfPosts(response.data)
        })
    }, []); 




    const likeAPost=(postId)=>{
      axios.post("http://localhost:3001/likes",
      {PostId:postId},
      {headers:{accessToken:localStorage.getItem('accessToken') } } 
      ).then((response)=>{
        setListOfPosts(listOfPosts.map((post)=>{
          if(post.id === postId){
            if(response.data.liked){
              return ({...post, Likes : [...post.Likes, 0]});
            }
            else{
              const likesArray = post.Likes;
              likesArray.pop();
              return ({...post,Likes:likesArray});
            }
          }
          else{
            return post
          }
        })
        );
        if(likedPosts.includes(postId))
        {
          setLikedPosts(
            likedPosts.filter((id)=>{
              return id != postId;
            })
          );
        }
        else{
          setLikedPosts([...likedPosts,postId]);

        }
      })
    };
    const classes = useStyles();
    const classcard={ width: '30rem',
    borderBlockEndColor:'lightblue',
    paddingTop:'8rem',borderRadius:'2rem' ,borderBlockColor:'lightblue',
    borderBlockStartColor:'lightblue',borderWidth:'0.4rem'};
 
    const paperst ={textAlign:'center',borderRadius:'2rem',background:'#e2fbff'}
    const ur=username;
    const r = ur.toUpperCase();
    const a=r.substring(0,1);
    return (

      <div>

<Row>
  <Col>
<div className={classes.root} ><p>
<Avatar alt="Remy Sharp" >
        {a}
      </Avatar>
      <img src={profile} width='130px' height='130px' style={{borderRadius:'3rem'}}/></p>
                <Grid container spacing={0.02} >
                  <Grid item xs={12} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={{borderRadius:'2rem' ,
                    borderStyle:'groove', borderBlockEndColor:'lightblue',boxShadow:'2rem',
                              borderWidth:'5px'}}>
                      
                    <Box sx={{ letterSpacing : 1,
                      borderBlockEndColor:'lightblue', background:'#e2fbff',
                      m: 3,  fontSize: 30, fontWeight: 'bold',textAlign: 'center' ,
                      borderRadius:'1rem',
                      boxShadow: 3 }}>
                      <div>  {fullname} </div> 
                    </Box>

                    </Paper>
                  </Grid>
                  <Grid item xs={10} sm={6} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}>
                      <b>{r}</b></Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}>
                       <b> Designation :</b> {desination} </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}>
                       <b>Gender : </b>{gender} </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}> 
                    <b>Age : </b> {getAge(age)} </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}>
                       <b>Contact :</b> {phoneno} </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}> 
                    <b> Address : </b> {address} </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3} style={{paddingTop:'10px'}}>
                    <Paper className={classes.paper} style={paperst}>
                      <b> Experience in years :</b> {getAge(experience)} </Paper>
                  </Grid>
                </Grid>
              </div>



        <div className="profile">
        
        {listOfPosts.length?(
          <div className="listOfPosts" style={{alignItems:'center',paddingLeft:'24rem'}}>
            <h3>Articles</h3> 
            {listOfPosts.map((value,key)=>{
               var format = `${value.postattach}`;
               var last4 = format.slice(-4).toLowerCase();
               var last3 = format.slice(-3).toLowerCase();
                          return (
                            <div style={{alignItems:'center'}}>
                              <Jumbotron fluid style={{paddingBottom:'1rem'}}>
                              <Card className="ONE" style={classcard}>
                              {value.postattach?(
                                        (last3=='jpg' || last3=='png' || last3=='jpeg' || last3=='gif' || last4=='tiff' ||last3=='psd' ||last3=='raw')
                                        ?(
                                           <a style={{cursor:'pointer',paddingLeft:'12px'}}
                                            onClick={()=> window.open(`${value.postattach}`, "_blank")}> 
                                            <img src={`${value.postattach}`} style={{height:'255px',
                                            width:'440px'}}/></a>)
                                            :(null)
                                        )
                                            :(null)
              }                           
                              <Card.Body>    
                                    <Card.Title>
                                      <h1  style={{borderBlockEnd:'1rem',
                                      fontFamily:'bolder',       
                                      borderBlockColor:'red'}}>
                                        {value.title}</h1></Card.Title>
                                    <Card.Text 
                                    style={{cursor:'pointer'}}
                                    onClick={()=>{history.push(`/post/${value.id}`)}}>
                                      <p>{value.postText}</p></Card.Text>
                                    <div className="fotter"> 
                                  <div classname="uname" >
                                    {value.username}
                                    
                              <div style={{ position: 'absolute',
                                        bottom: '0',
                                        left: '25rem',    }}>
                                <label>Likes:-{value.Likes.length}</label>
                                </div>
                              </div>
                            
                            </div>
                              </Card.Body>
                                </Card>
                                </Jumbotron>
                          
                          </div>
                            );
                      })}
        </div>):(
        <div style={{textAlign:'center',fontWeight:'bolder' , paddingTop:'1rem'}}>
          Not posted any Article yet !!!!</div>)}
                   </div>
                   </Col>
                   </Row>
        </div>
    )
}

export default Profile