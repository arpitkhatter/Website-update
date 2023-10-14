import React from 'react';
import './SampleProjects.css';
import SGSG from '../../assets/sgsg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight:"30px"
  },
  media: {
    height: 140,
  },
});

const data = [
    {
      image:'../../assets/sgsg.jpg',
      heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      footer:"lorem ipsum is simple."
    },
    {
      image:'../../assets/sgsg.jpg',
      heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      footer:"lorem ipsum is simple."
    },
    {
      image:'../../assets/sgsg.jpg',
      heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      footer:"lorem ipsum is simple."
    }
];

const SampleProjects = () => {

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
            <h1 className = "case-header"> Lorem Ipsum</h1>
              </div>
          </div> 
          <div className = "spacer-div">
              
          </div>    
          <div className = "case-wrapper">
            <div className = "widget-container">
               <div className = "element-template">
                  <div className = "section">
                  {data.map((item) => {
                        return(
                            <Card className={classes.root}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={SGSG}
                                title="Case Study"
                              />
                              <CardContent>
                                <Typography gutterBottom 
                                 style= {{color:"black",
                                 fontSize:"18px",
                                 fontWeight:"600",
                                 lineHeight:"1.4em",
                                 fontFamily:"sans-serif"}}
                                variant="h5" component="h5">
                                  {item.heading}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {item.footer}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            </Card>
                        )
                      })}
                    
                  </div>
                  <div className = "spacer-div" style = {{height:"100px"}}>
              
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

export default SampleProjects;






