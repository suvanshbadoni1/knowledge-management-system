import './App.css';
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Search from './pages/Search';
import ChatIcon from '@material-ui/icons/Chat';
import Approvepost from './pages/Approvepost';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SvgIcon from '@material-ui/core/SvgIcon';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import CreatePost from './pages/CreatePosts';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {AuthContext} from './helpers/AuthContext'
import logo from './images/knowledge(1).png';
import {useState,useEffect} from 'react';
import axios from 'axios';
import PageNotFound from './pages/PageNotFound'
import ongclogo from './images/ongc-logo.jpg';
import Profile from './pages/Profile';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Askques from './pages/Askques';
import About from './pages/About';
import { Navbar } from 'react-bootstrap';
import postup from './pages/Postup';
import { makeStyles } from '@material-ui/core/styles';



function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));



function App() 
{
  const menus= {textDecoration:'none', color:'black'};
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [authState,setAuthState] = useState({
    username:"", 
    id:0, 
    status:false
  })
  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth',{headers:{
      accessToken :localStorage.getItem("accessToken"),
    },
  }).then((response)=>{
      if(response.data.error) {
        setAuthState({...authState, status:false});
      }
      else{
        setAuthState({
          username:response.data.username, 
          id:response.data.id, 
          status:true,
        });
      }
    })
    
  },[]);

  const logout=()=>{
      localStorage.removeItem("accessToken");
      setAuthState({
      username:"", 
      id:0, 
      status:false});
  };

  const classes = useStyles();

            return (
              
              
              <div className="App">
                
                <AuthContext.Provider value={{ authState, setAuthState }}>
                  <Router>
                  <Navbar>

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar">
                     
                      <div>
                        { authState.status && (
                        <Link to="/">
                          <HomeIcon sx={{ fontSize: 40 }} />
                          </Link>)}
                      </div>

                          <div>
                            {
                              (authState.username=='pankajkumar1@gmail.com')&&(
                                <div>
                                  <Link to='/approvepost'>
                                    <PostAddIcon sx={{ fontSize: 30 }}/>
                                  </Link>
                                  </div>
                              )
                            }
                            </div>

                          <div>
                            {authState.status &&(
                            <Link to='/search'>
                            <SearchIcon sx={{ fontSize: 30 }}/>
                            </Link>)}
                            </div>
                          
                      <div >
                        <img className="switch" src={logo} width="120" height='80' style={{paddingBottom:'3px'}} alt="one"/>
                      </div>
                      
                      <div style={{fontSize:'20px'}}>
                        { authState.status && (
                        <Link to="/createpost">
                        <AddBoxIcon/>Create An Article
                        </Link>
                        )}
                        </div>

                          {/*<div>
                            {authState &&(
                              <Link to={{pathname:`/messages/`,
                                usern:authState.username  
                            }}>
                                <ChatIcon sx={{ fontSize: 30 }}/>
                              </Link>
                            )
                            }
                          </div>*/}

                        <div style={{fontSize:'20px'}}>
                        { authState.status && (
                        <Link to={`/askques/${authState.username}`}>
                        <AddBoxIcon/>Ask_or_Response 
                        </Link>
                        )}
                        </div>


                      <div style={{paddingBottom:'12px'}}>
                        {/*<img src={ongclogo} width="50" height="50" alt="ongc"/>*/}
                      </div>               
                      

                          
                        {
                          !authState.status ? (
                            <>
                            <div>
                          <Link to="/login">Login </Link>
                            </div>
                            
                            <div>
                          <Link to="/registration">Registration</Link>
                            </div>
                            </>
                        ): (
                        <div>
                        <ListIcon style={{cursor:'pointer',color:'white'}} sx={{ fontSize: 40 }} 
                        onClick={handleClick}/>   
                        <Menu
                          style={{cursor:'pointer'}}
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClick={handleClose}
                        >
                          <Link to={`/profile/${authState.id}`} style={menus} >
                            <MenuItem >
                            <AccountCircleIcon/>My Profile</MenuItem>
                            </Link>
                          <MenuItem onClick={logout} style={menus}><ExitToAppIcon/>Logout</MenuItem>
                          <Link to={`/about`} style={menus} >
                          <MenuItem > <InfoIcon/>About Us</MenuItem>
                          </Link>
                          </Menu>
                          </div>
                  )
                  }
                  {
                          authState.status ? (
                            
                        <div>
                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" 
                        className={classes.orange}>
                        {authState.username.substring(0,1).toUpperCase()} </Avatar>
                        </div>
                        ):(<div>
                          </div>)}
                  </div>
                  </Navbar.Collapse>
                 </Navbar>
                  <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/createpost' exact component={CreatePost}/>
                    <Route path='/post/:id' exact component={Post}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/registration' exact component={Registration}/>
                    <Route path='/profile/:id' exact component={Profile}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/search' exact component={Search}/>
                    <Route path='/askques/:username' exact component={Askques}/>
                    <Route path='/postupload' exact component={postup}/>
                    <Route path='/approvepost' exact component={Approvepost}/>
                    <Route path='*' exact component={PageNotFound}/>
                  </Switch>
                </Router>
                </AuthContext.Provider>
              </div>
              
            );  
}

export default App;
