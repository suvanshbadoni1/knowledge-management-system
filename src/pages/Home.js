import axios from 'axios';
import { useContext, useEffect , useState } from 'react';
import React,{Component} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {AuthContext} from '../helpers/AuthContext';
import {Row,Col,Card,Jumbotron} from 'react-bootstrap';
import tweet from '../images/tweet.jpg'
import right from '../images/right.png'
import _ from 'lodash';
import { Pagination, paginationClasses } from '@material-ui/core';

const pageSize=3;

function Home() {
  
  const [posts, setposts] = useState();
  const [paginatedPosts,setpaginatedPosts] = useState();
  const [currentPage,setcurrentPage] = useState(1);
  let history = useHistory()
  const [likedPosts, setLikedPosts] = useState([]);
  const [dateState, setDateState] = useState(new Date());
  setInterval(() => {
    console.log('watching');
    setDateState(new Date());
  }, 30000);
 function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let days = newDate.getDay();
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (<div>{`${day[days]}`}<br/>{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</div>)
    }
  
  useEffect(() => { if(!localStorage.getItem('accessToken')){
    history.push('/login');
  }
  else{
  axios.get("http://localhost:3001/posts",
  {headers:{accessToken:localStorage.getItem('accessToken') } }).then((response)=>{
    setposts(response.data.listOfPosts);
    setLikedPosts(response.data.likedPosts.map((like)=>{
      return like.PostId;
    }));
    setpaginatedPosts(_(response.data.listOfPosts).slice(0).take(pageSize).value());
  });
  }
}, []) 
const likeAPost=(postId)=>{
  axios.post("http://localhost:3001/likes",
  {PostId:postId},
  {headers:{accessToken:localStorage.getItem('accessToken') } } 
  ).then((response)=>{
    setposts(posts.map((post)=>{
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

const classcard={ width: '30rem',
borderBlockEndColor:'lightblue',
paddingTop:'0.8rem',borderRadius:'2rem' ,borderBlockColor:'lightblue',
borderBlockStartColor:'lightblue',borderWidth:'0.4rem'};

  const pageCount = posts?Math.ceil(posts.length/pageSize):0;
  if (pageCount===1) return null;
  const pages = _.range(1,pageCount+1)
  const pagination =(pageno)=>{
    setcurrentPage(pageno);
    const startIndex =(pageno-1)*pageSize;
    const paginatedPosts = _(posts).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPosts);
  }
  return (
    <div>
      <Row>
          
          <Col style={{paddingTop:'1rem',paddingLeft:'1px'}}>
            <div style={{textAlign:'center',
            fontSize:'35px',color:'gray',fontWeight:'bolder'}}>{getCurrentDate(':')}</div><br/>
          {/* <div style={{paddingTop:'1rem',paddingLeft:'0.1px',paddingRight:'16px',paddingBottom:'1rem'}}>
              <a href='https://twitter.com/ONGC_'><img src={tweet} width='380px' height='300px'
              style={{borderRadius:'2rem'}}
              />
              <div style={{textAlign:'center'}}>
                ONGC Tweets
              </div>
              </a>
            </div>*/}
          </Col>
        <Col>
        <div>
 { !paginatedPosts ? ('Nodata'):(

   <div>
     {paginatedPosts.map((value,index)=>{
       var format = `${value.postattach}`;
       var last4 = format.slice(-4).toLowerCase();
       var last3 = format.slice(-3).toLowerCase();
          return (<div key={index}>
            <div style={{paddingTop:'12px'}}>
                              <Jumbotron fluid style={{paddingBottom:'1rem'}}>
                                      <Card className="ONE" style={classcard}>    
                                            <Card style={{paddingLeft:'15px'}}>
                                            {value.postattach?(
                                        (last3=='jpg' || last3=='png' || last3=='jpeg' || last3=='gif' || last4=='tiff' ||last3=='psd' ||last3=='raw')
                                        ?(
                                           <a style={{cursor:'pointer'}}
                                            onClick={()=> window.open(`${value.postattach}`, "_blank")}> 
                                            <img src={`${value.postattach}`} style={{height:'255px',
                                            width:'430px'}}/></a>)
                                            :(null)
                                        )
                                            :(null)
              }                       
                                              <h1  style={{borderBlockEnd:'1rem',
                                              fontFamily:'bolder',       
                                              borderBlockColor:'red'}}>
                                                {value.title}</h1></Card>
                                            <Card.Text 
                                            style={{cursor:'pointer'}}
                                            onClick={()=>{history.push(`/post/${value.id}`)}}>
                                              <p>{value.postText}</p></Card.Text>
                                            <div className="fotter"> 
                                          <div classname="uname" >
                                            <Link style={{textDecoration:'none',color:'black',
                                            fontStyle:'bolder',fontWeight:'bolder',paddingLeft:'10px',
                                            fontFamily:'bolder'}} to={`/profile/${value.UserId}`}>
                                            {value.username}
                                            </Link>
                                      <div style={{ position: 'absolute',
                                                bottom: '0',
                                                left: '25rem',    }}>
                                        <FavoriteIcon 
                                        style={{cursor:'pointer',placeItems:'center',
                                        textAlign:'center'}}
                                        onClick={()=>{likeAPost(value.id)
                                        }}
                                        className={likedPosts.includes(value.id) ? "unlike" : "like"}
                                        />
                                        
                                        <label>{value.Likes.length}</label>
                                        </div>
                                      </div>
                                    
                                    </div>
                                        </Card>
                                        </Jumbotron>
                          
                          </div>
            </div>)
     }
        )}
     </div>
 )    
        
  }
  <nav>
  <ui className='d-flex justify-content-center'>
    
    {
      pages.map((page)=>(
        <div className={page===currentPage?'page-item active':'page-item'}>
      <p className='page-link' onClick={()=>pagination(page)}>{page}</p>
    </div>
      ))
    }
  </ui>
  </nav>
  </div>
  </Col>
  <Col style={{paddingTop:'1rem',paddingLeft:'1px'}}>
                      <div style={{color:'gray',textAlign:'center',
                      paddingBottom:'30px',fontWeight:'bolder',fontSize:'30px'}} >
              {dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}
            </div>  
           {/* <div >
              <a href='https://www.ongcindia.com/wps/wcm/connect/en/home/'><img src={right} width='300px' height='200px'
              style={{borderRadius:'2rem'}}
              />
              <div style={{textAlign:'center',fontSize:'12px'}}>
                
ONGC - Oil and Natural Gas Corporation Limited 
              </div>
              </a>
           </div>*/}
          </Col>

  </Row>
    </div>
  )
}

export default Home
