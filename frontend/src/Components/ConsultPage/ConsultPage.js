import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ConsultPage.css';
import ConsultImage from '../../assets/livingRoom.jpg'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      background:"teal"
    },
  }));

const ConsultPage = () => {
    
        const classes = useStyles();
    return (
        <div className = "outer-wrapper">
           <div className = "homeText-part">
              <div className = "main-content">
                  <h1 className = "main-text">Ready for your new Home?</h1>
              </div>
              <div className = "sub-content">
                <h5 className = "sub-text">  
                    Book a free consultation with one of our interior designers
                    and get your dream apartment furnished. </h5>
              </div>
              <div class="spacer" style ={{height:"20px"}}></div>
              <Button variant="contained" size = "large" style = {{backgroundColor:"#0B4C76", color:"white"}} >
                  Get Started For free <ArrowForwardRoundedIcon/> 
              </Button>
           </div>

           <div className = "image-part">
             <div className = "image-wrapper">
              <img src = {ConsultImage} alt = "" className = "imgStyle" ></img>
             </div>
           </div>            
        </div>
    );
};

export default ConsultPage;