import dexterio from '../../assets/dexterio.png';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {FaInstagra}

const Footer = () => {
    return (
        
          <section className= "footer-sec">
			  <div className = "wrapper">
		          <div className = "footer-1">
			         <div className = "outer-wrapper-1">
				       <div className = "outer-image-wrapper">
					      <div className="image-wrapper">
						    <img className = "image3" alt="" src ={dexterio} loading = "lazy"></img>
						  </div>	  
					   </div>	   
					 </div>		
					 <div className = "space-div" style= {{height:"29px"}}></div> 
					 <div className = "outer-text-wrapper">
					   <div className = "inner-text-wrapper">
					     <h5 className = "text">Delivering beautiful <br/> Interiors at budget<br/>
						    friendly prices!<br/>
						 </h5>
					   </div>	   
					 </div>	 
					 <div className = "space-div" style= {{height:"31px"}}></div> 
                     <div className= "outer-c">
				        <div className = "copy-wrapper">
					       <h5 className = "copyright">© Dexterio</h5>
						</div>		
					 </div>		 
				  </div>		  
		          <div className = "footer-2">
			        <div className = "wrapper1" style ={{padding:"10px", paddingTop:"40px"}}>
                       <div className ="spacer"></div>
					   <div className = "heading-outer">
						   <div className = "heading-inner">
						     <h4 className = "service">Our Service</h4>
						   </div>	   
					   </div>
					   <div class ="spacer" style = {{height:"40px"}}></div>
				
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "#">How it Works</a></h5>
						  </div>		  
					   </div>	   
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "#">Projects</a></h5>
						  </div>		  
					   </div>	   
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "#">Reviews</a></h5>
						  </div>		  
					   </div>	   
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "https://dexterio.in/contact-us/">Contact Us</a></h5>
						  </div>		  
					   </div>	   
					</div>
				  </div>		  
		          <div className = "footer-3">
			        <div className = "Wrapper1" style = {{padding:"10px", paddingTop:"40px"}}>
					<div className = "heading-outer">
						   <div className = "heading-inner">
						     <h4 className = "service">Company</h4>
						   </div>	   
					   </div>
					   <div class ="spacer" style = {{height:"40px"}}></div>
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href="https://dexterio.in/about-us/">About Us</a></h5>
						  </div>		  
					   </div><div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "#">Terms of Use</a></h5>
						  </div>		  
					   </div>
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href = "#">Privacy Policy</a></h5>
						  </div>		  
					   </div>
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data"><a href="https://dexterio.in/warranty-policy/">Warranty Policy</a></h5>
						  </div>		  
					   </div>
					   
					</div>
				  </div>		  
		          <div className = "footer-4">
				       <div className = "Wrapper1" style = {{padding:"10px",paddingTop:"40px"}}>
					   <div className = "heading-outer">
						   <div className = "heading-inner">
						     <h4 className = "service">Contact Us</h4>
						   </div>	   
					   </div>
					   <div class ="spacer" style = {{height:"40px"}}></div>
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data">(082) 0919-4339</h5>
						  </div>		  
					   </div>
					   <div class = "list-outer">
					      <div class = "list-inner">
					        <h5 class="list-data">Sansthan Path <br/> 
							                      Jhalana Gram <br/>  
												  Malviya Nagar, Jaipur <br/>
												  Rajasthan 302017
							</h5>
						  </div>		  
					   </div>
					   <div class = "list-outer-icon">
					      <div class = "list-innericon">
						  <i class="fab fa-instagram"></i>
						  </div>		  
					   </div>

                           {/* <ul style  ={{listStyleType:"none"}}>
							   <li class = "listed-styling">(082)0919-4339</li>
							
							   <li class = "listed-styling">Sansthan Path</li>
							   <li class = "listed-styling">Jhalana Gram</li>
							   <li class = "listed-styling">Malviya Nagar, Jaipur</li>
							   <li class = "listed-styling">Rajasthan 302017</li>
						   </ul> */}
					   </div>
				  </div>		  
			  </div>
		  </section>
    );
};

export default Footer;