import React from 'react'
import axios from 'axios';


function Approv(props) {
    const btnstyle={borderRadius:'2rem',fontWeight:'bolder',
    color:'white',background:'yellowgreen',width:'7rem'}
    const btnstyle1={borderRadius:'2rem',fontWeight:'bolder',
    color:'white',background:'red',width:'8rem'}
    const deletePost = (id) =>{
        axios.delete(`http://localhost:3001/posts/${id}`,
        {headers:{accessToken:localStorage.getItem('accessToken')},}).then(()=>{
            alert('Selete Post Success');
            window.location.reload(false);
        })
    }
    return (
        <div>
            <div>
            <div style={{fontSize:'12px',paddingLeft:'2rem'}}>
            <button 
                style={btnstyle}
                onClick={()=>{
                axios.put(`http://localhost:3001/posts/Show_Not/${props.pid}`,{id:props.pid}
                ,{headers:{accessToken:localStorage.getItem('accessToken')},
            }).then(alert('Post Approved !!'));
            window.location.reload(false);
            }}>Approve post
                </button>
                </div>           
                <div style={{ position: 'absolute',fontSize:'12px',
                                                bottom: '9px',
                                                left: '20rem',    }}>
                <button style={btnstyle1} onClick={()=>
                {deletePost(props.pid)}}>
                Delete Post
                </button>
                </div>
                </div>
        </div>
    )
}

export default Approv
