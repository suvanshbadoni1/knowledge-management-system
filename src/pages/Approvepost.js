import React from 'react'
import axios from 'axios';
import {Row,Col,Card,Jumbotron} from 'react-bootstrap';
import {  useEffect , useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Approv from './components/Approv';
import robo from '../images/mainrobot1.gif'
import robo1 from '../images/mainrobot.gif'

function Approvepost() {
    const [listOfPosts,setListOfPosts] = useState([]);
    let history = useHistory()

    useEffect(() => 
    {
      if(!localStorage.getItem('accessToken')){
        history.push('/login');
      }
      else{
      axios.get("http://localhost:3001/posts/ShowNot",
      {headers:{accessToken:localStorage.getItem('accessToken') } }).then((response)=>{
        setListOfPosts(response.data.listOfPosts);
        
      });
      }
    }, []) 

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const classcard={ width: '30rem',
    borderBlockEndColor:'lightblue',
    paddingTop:'1rem',borderRadius:'2rem' ,borderBlockColor:'lightblue',
    borderBlockStartColor:'lightblue',borderWidth:'0.4rem'};
    return (
        <div>

          <Row>
            <Col style={{paddingTop:'5rem'}}>
            <img src={robo} width='350px' style={{borderRadius:'2rem',border:'1px solid #57c0e8'}}/>
            </Col>
            <Col>
              <div 
                  style={{fontWeight:'bolder',fontSize:'24px',textAlign:'center',paddingBottom:'2rem'}}>
                    Number of Post
                    </div>
            {listOfPosts.map((value,key)=>{
               var format = `${value.postattach}`;
               var last4 = format.slice(-4).toLowerCase();
               var last3 = format.slice(-3).toLowerCase();
            return (
                
                <div style={{paddingTop:'12px'}}>
                
                <Card className="ONE" style={classcard}>
                                      <Card.Title>
                                      {value.postattach?(
                                        (last3=='jpg' || last3=='png' || last3=='jpeg' || last3=='gif' || last4=='tiff' ||last3=='psd' ||last3=='raw')
                                        ?(
                                           <a style={{cursor:'pointer'}}
                                            onClick={()=> window.open(`${value.postattach}`, "_blank")}> 
                                            <img src={`${value.postattach}`} style={{height:'255px',
                                            paddingLeft:'2rem',
                                            width:'430px'}}/></a>)
                                            :(null)
                                        )
                                            :(null)
              }                       
                    <div style={{textAlign:'center'}}>{key+1}:{value.title}</div>
                    <Card.Text>{value.postText}
                      </Card.Text>
                    <Approv pid={value.id} ti={value.title} />
                    </Card.Title>
                    </Card>
                </div>)
            }
            )
        }
        </Col>

        <Col style={{paddingTop:'5rem'}}>
            <img src={robo1} width='350px' style={{borderRadius:'2rem',border:'1px solid #57c0e8'}}/>
            </Col>
        </Row>
        </div>
    )
}

export default Approvepost