import {React, useContext, useEffect , useState  } from 'react'
import { useParams ,useHistory }from 'react-router-dom'
import axios from 'axios';
import {AuthContext} from '../helpers/AuthContext'
import DeleteIcon from '@material-ui/icons/Delete';
import {Jumbotron,Card,Modal} from 'react-bootstrap';
import SendIcon from '@material-ui/icons/Send';
function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments,setComments] = useState([]);
    const [newComment,setNewComment] = useState("");
    const {authState} = useContext(AuthContext);
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
            setPostObject(response.data);
        });
        axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
            setComments(response.data);
        });
    },[]);

        const addComment = () => {
            axios.post("http://localhost:3001/comments",{
                  commentBody: newComment,
                  PostId: id,
                },
                {
                    headers:{
                        accessToken: localStorage.getItem("accessToken"),
                    },
                }
                ).then((response)=>{
                    if(response.data.error){
                        alert("please login to add solution or comment");
                    }
                    else{
                    const commentToAdd = {
                        commentBody: newComment,
                        username:response.data.username,
                    };
                    setComments([...comments,commentToAdd]);
                    setNewComment("");
                    }
                });
    };

    const  deleteComment = (id) =>{
        axios.delete(`http://localhost:3001/comments/${id}`,
        {headers:{
            accessToken:localStorage.getItem('accessToken')
        },
        }).then(()=>{
            setComments(
              comments.filter((val)=>{
                return val.id != id;
            })
           );
        });
    };

    const deletePost = (id) =>{
        axios.delete(`http://localhost:3001/posts/${id}`,
        {headers:{accessToken:localStorage.getItem('accessToken')},}).then(()=>{
            alert('delete success')
            history.push('/');
        })
    }
    const classcard={ width: '30rem',
    borderBlockEndColor:'lightblue',
    paddingTop:'1rem',borderRadius:'2rem' ,borderBlockColor:'lightblue',
    borderBlockStartColor:'lightblue',borderWidth:'0.4rem'};
    var format = `${postObject.postattach}`;
               var last4 = format.slice(-4).toLowerCase();
               var last3 = format.slice(-3).toLowerCase();
    return (
        <div style={{paddingTop:'3rem'}}>
            
            <Jumbotron fluid style={{paddingBottom:'1rem'}}>
                              <Card className="ONE" style={classcard}>
                              <Card.Body>{postObject.postattach?(
                                        (last3=='jpg' || last3=='png' || last3=='jpeg' || last3=='gif' || last4=='tiff' ||last3=='psd' ||last3=='raw')
                                        ?(
                                           <a style={{cursor:'pointer'}}
                                            onClick={()=> window.open(`${postObject.postattach}`, "_blank")}> 
                                            <img src={`${postObject.postattach}`} style={{height:'255px',
                                            width:'430px'}}/></a>)
                                            :(null)
                                        )
                                            :(null)
              }               
                                    <Card.Title>
                                      <h1  style={{borderBlockEnd:'1rem',
                                                                       
                                      borderBlockColor:'red'}}>
                                          {postObject.title}
                                          </h1>
                                    </Card.Title>
                                    <Card.Text>
                                        {postObject.postText}
                                    </Card.Text>
                                    <div className='fotter'>
                                        <div><h4>{postObject.username}</h4></div>
                                        {authState.username === postObject.username && 
                                        <div style={{paddingLeft:'25rem'}}><DeleteIcon 
                                        style={{cursor:'pointer'}} onClick={()=>
                                    {deletePost(postObject.id)}}/></div>}
                                    </div>
                                </Card.Body>
                                </Card>
            </Jumbotron>


            <div>
                <div>
                    <input type="text"
                    value={newComment} 
                    placeholder="Enter Reply..." 
                    style={{borderWidth:'1px',textAlign:'center',width:'29rem',
                    fontSize:'18px',height:'3rem',borderRadius:'10rem'}
                }
                    autoComplete="off" onChange={(event)=>{
                        setNewComment(event.target.value)
                    }}/>
                    <SendIcon style={{cursor:'pointer'}} onClick={addComment}/>
                </div>
                <div>
                    
                <div style={{paddingTop:'0.1rem'}}>
                    {comments.map((comment,key)=>{
                        return (
                        <div key={key}>
                            <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title style={{fontSize:'18px',fontFamily:'bolder'}}>
                            {comment.username}</Modal.Title>   
                            {authState.username === comment.username && 
                            <DeleteIcon style={{cursor:'pointer'}} 
                            onClick={()=>{deleteComment(comment.id)}}/>
                            }
                    </Modal.Header>
                        <Modal.Body>
                            {comment.commentBody}
                        </Modal.Body>
                            </Modal.Dialog>
                            
                            
                        </div>);
                    })}
                </div>
                </div>
                   
            </div>
        </div>
    )
}

export default Post