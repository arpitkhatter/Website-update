import React from 'react';
import designImage from '../../assets/dexterioNew.png';
import './IntroPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      background:"teal"
    },
  }));

const IntroPage = () => {
    // const classes = useStyles();
    return (
        <div className = "outer-wrapper">
           <div className = "homeText-part">
              <div className = "main-content">
                  <h1 className = "main-text">H<span class= "o" style = {{color:"#0B4C76"}}>o</span>me renovation
                  <br/>
                   made easy, fast
                   <br/> 
                   and reliable</h1>
              </div>
              <div className = "sub-content">
                <h3 className = "sub-text">  Welcome to one stop solution for all your home 
                    <br/>interior needs. Unlock your dream home with dexterio </h3>
              </div>
             
             < div class ="spacer" style = {{height:"20px"}}></div>
              <Button variant="contained" style ={{backgroundColor:"#0B4C76", color:"white"}} size = "large" >
                  Book Online Consultation <ArrowForwardRoundedIcon/>
              </Button>
              <div class = "spacer" style = {{height:"30px"}}></div>
           </div>

           <div className = "image-part">
             <div className = "image-wrapper">
              <img src = {designImage} alt = "" className = "imgStyle" ></img>
             </div>
           </div>            
        </div>
    );
};

export default IntroPage;