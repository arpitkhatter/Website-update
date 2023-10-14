import React from 'react';
import './CaseStudies.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import droom from '../../assets/drawingroom.jpg';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../assets/profilepic.jpg';


const caseData = [
    {
        // profilePic:'../../assets/profilepic.jpg',
        // "image":require('../../assets/drawingroom.jpg'),
        name:"Mita Arora",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        rating:5
    },
    {
        profilePic:'../../assets/profilepic.jpg',
        image:'../../assets/drawingroom.jpg',
        name:"Mita Arora",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        rating:5
    },
    {
        profilePic:'../../assets/profilepic.jpg',
        image:'../../assets/drawingroom.jpg',
        name:"Mita Arora",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        rating:5
    }
];


const useStyles =  makeStyles((theme) => ({
    root: {
        marginRight:"30px",
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  

const CaseStudies = () => {

    const [value,setValue] = React.useState(5);

    const classes = useStyles();
    return (
        <section className = "case-study">
            <div className = "container">
               <div className = "wrapper-column">
                  <div className = "element-wrapper">
                      <div className = "spacer-div">
                          
                      </div>    
                      <div className = "widget-header">
                          <div className = "widget-header-inner">
                        <h1 className = "case-header"> Case Studies</h1>
                          </div>
                      </div> 
                      <div className = "spacer-div">
                          
                      </div>    
                      <div className = "case-wrapper">
                        <div className = "widget-container">
                           <div className = "element-template">
                              <div className = "section">
                                 
                               {caseData.map((item) => {
                                   return (
                                    <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={droom}
                                        title="Room Pic"
                                        />
                                        <CardContent>
                                        
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <div class = "content-wrapper" style = {{display:"flex"}}>    
                                        <div class ="wrapper-1">
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.content}
                                            </Typography>
                                        </div>
                                        <div class = "wrapper-2">    
                                        <Avatar src={profile} className={classes.large} />
                                        </div>
                                        </div>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                           {/* <Typography component="legend">Read only</Typography> */}
                                           < Rating name="read-only" value={item.rating} readOnly />
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                   )
                               })}
                                
                              </div>
                           </div>    
                        </div>    
                      </div>       
                  </div>
               </div>    
            </div> 

        </section>
    );
};



export default CaseStudies;