import React , {useState}from 'react';
import './FeaturesPage.css';
// import Placard from '../Placard/Placard';
import Tree from '../../assets/Tree2.png';
import Ribbon from '../../assets/Ribbon2.png';
import Clipboard from '../../assets/Clipboard2.png';
import Clock from '../../assets/Clock2.png';
import Palette from '../../assets/Pallette2.png';
import Verified from '../../assets/Verified2.png';

const cardContent = [{
    image: Tree,
    header:"We handle everything",
    content:"From designing to execution, selection of quality materials to getting vetted contractors. Sit back and relax. Let dexterio do the rest."
},
{
    image:Clock,
    header:"Zero delay",
    content:"We ensure superior quality execution,     while keeping to timelines. Our satisfaction is in living on your expectations."
},
{
    image:Ribbon,
    header:"Quality assured",
    content:" In house Quality monitoring system for Interiors - QMSIR. We provide the highest quality products from the best brands and manufacturers."
},
{
    image:Palette,
    header:"Design consultancy",
    content:"Collaborate with the industry's best interior designers to bring your dream interior to life."
}, 
{
    image:Verified,
    header:"10 years warranty",
    content: "Unlike traditional constructors who went missing after the project ends, we take care of your interior even after our service ends."
}, 
{
    image:Clipboard,
    header:"Price match guarantee",
    content:"No hidden costs. We deliver our services at a pre estimated quote. If not, we return the surplus."
}
];

const FeaturesPage = () => {

    return (

        <>
        			<div class="elementor-element elementor-element-5a9ce18 elementor-widget elementor-widget-spacer" data-id="5a9ce18" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner" style = {{height:"67px"}}></div>
		</div>
				</div>
				</div>

<div class="elementor-element elementor-element-1678b35 elementor-invisible elementor-widget elementor-widget-heading" data-id="1678b35" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{textAlign:"center"}}>
			<h1 class="elementor-heading-title elementor-size-default"
              style = {{
                  color:"#001616",
                  fontFamily:"sans-serif",
                  fontSize:"36px",
                  fontWeight:"600",
                  lineHeight:"1.4em",
                  letterSpacing:"0px"              }}
            >Come join India's renovation revolution</h1>		</div>
				</div>
				<div class="elementor-element elementor-element-244508a elementor-widget elementor-widget-spacer" data-id="244508a" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner" style = {{height:"28px"}}></div>
		</div>
				</div>
				</div>
        
        <section class="has_ma_el_bg_slider elementor-section elementor-inner-section elementor-element elementor-element-ce1a247 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ce1a247" data-element_type="section">
						<div class="elementor-container elementor-column-gap-wide">
					<div class="inner-wrapper" data-id="962e2e3" data-element_type="column" 
                    >
			<div class="elementor-widget-wrap elementor-element-populated" style = {{textAlign:"left"}}>
								<div class="elementor-element elementor-element-d22373e elementor-widget elementor-widget-image" data-id="d22373e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="112" height="112" 
                                                            src={Tree} class="attachment-full size-full" 
                                                            alt="" loading="lazy" class = "image1" />															</div>
				</div>
				<div class="elementor-element-d45e7b9 " data-id="d45e7b9" 
                style = {{width:"100%"}}
                data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container-heading" style = {{margin:"8% 0% 08% 0%"}}>
			<h3 class="elementor-heading-title-head">We handle everything</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-c253df8 elementor-invisible elementor-widget elementor-widget-heading" 
                data-id="c253df8" data-element_type="widget" 
                data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" 
                data-widget_type="heading.default" style ={{width:"100%"}}>
				<div class="elementor-widget-container" style = {{position:"relative"}}>
			<h5 class="elementor-heading-title-main elementor-size-default">
                From designing to execution, selection
                 <br/>of quality materials to getting vetted 
                 <br/>contractors. Sit back and relax. Let <br/>dexterio do the rest.
</h5>		</div>
				</div>
					</div>
		</div>
				<div class="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8a8952f" data-id="8a8952f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element-1st elementor-element-9f65a27 elementor-widget elementor-widget-image" data-id="9f65a27" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="102" height="103" 
                                                            src={Clock}
                                                             class="attachment-full size-full" 
                                                             alt="" loading="lazy" class = "image1"/>															</div>
				</div>
				<div class="elementor-element-2nd elementor-element-51ba968 elementor-widget elementor-widget-heading" 
                 style = {{width:"100%"}}
                data-id="51ba968" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{position:"relative", margin:"9% 0% 08% 0%"}} >
			<h3 class="elementor-heading-title-head elementor-size-default">Zero delay</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-12c98fb elementor-invisible elementor-widget elementor-widget-heading" 
                 style = {{width:"100%"}}
                data-id="12c98fb" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{position:"relative"}}>
			<h5 class="elementor-heading-title-main  elementor-size-default">We ensure superior quality execution,
             <br/>while keeping to timelines. 
              Our<br/>satisfaction is in living on your <br/>expectations.</h5>		</div>
				</div>
					</div>
		</div>
				<div class="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a2a10f1" style = {{width:"33%"}} data-id="a2a10f1" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-f132a0d elementor-widget elementor-widget-image" data-id="f132a0d" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="102" height="101" 
                                                            src={Ribbon} 
                                                            class="attachment-full size-full" alt=""
                                                            class ="image1"
                                                             loading="lazy" />		
                </div>
				</div>
				<div class="elementor-element elementor-element-b28ae9c elementor-widget elementor-widget-heading" 
                data-id="b28ae9c" data-element_type="widget" 
                data-widget_type="heading.default"
                style = {{width:"100%"}}
                >
				<div class="elementor-widget-container" style = {{position:"relative", margin:"5.5% 0% 4% 0%"}}>
			<h3 class="elementor-heading-title-head elementor-size-default">Quality assured</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-c1895b0 elementor-invisible elementor-widget elementor-widget-heading" 
                  style = {{width:"100%"}}
                data-id="c1895b0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{position:"relative"}}>
			<h5 class="elementor-heading-title-main elementor-size-default">
                In house Quality monitoring system <br/>for Interiors - QMSIR. We provide the
                <br/>highest quality products from the best brands and manufacturers.</h5>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>

        <section class="has_ma_el_bg_slider elementor-section elementor-inner-section elementor-element elementor-element-e06cdcb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e06cdcb" data-element_type="section">
						<div class="elementor-container elementor-column-gap-wide" >
					<div class="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2352f14" 
                     style = {{width:"33.33%"}}
                    data-id="2352f14" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-97603ca elementor-widget elementor-widget-image" data-id="97603ca" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="101" height="100" 
                                                            src={Palette} 
                                                            class="attachment-full size-full" 
                                                            alt="" loading="lazy" class="image1"/>															</div>
				</div>
				<div class="elementor-element elementor-element-7e2d739 elementor-widget elementor-widget-heading" data-id="7e2d739" data-element_type="widget" data-widget_type="heading.default" style= {{width:"100%"}}>
				<div class="elementor-widget-container" style = {{margin:"8% 0% 08%  0%", position:"relative"}}>
			<h3 class="elementor-heading-title-head elementor-size-default">Design consultancy</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-e586601 elementor-invisible elementor-widget elementor-widget-heading" data-id="e586601" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title-main elementor-size-default">Collaborate with the industry's best <br/>interior designers to bring your dream <br/>interior to life.</h5>		</div>
				</div>
					</div>
		</div>
				<div class="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6fb9b5e" 
                 style = {{width:"33.33%"}}
                data-id="6fb9b5e" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-16792b3 elementor-widget elementor-widget-image" data-id="16792b3" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="90" height="89"
                                                             src={Verified}
                                                              class="attachment-full size-full" 
                                                              alt="" loading="lazy" class = "image1"/>															</div>
				</div>
				<div class="elementor-element elementor-element-5e289a4 elementor-widget elementor-widget-heading" data-id="5e289a4" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{margin:"8% 0% 08%  0%"}}>
			<h3 class="elementor-heading-title-head elementor-size-default">10 years warranty</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-90c517b elementor-invisible elementor-widget elementor-widget-heading" data-id="90c517b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title-main elementor-size-default"> Unlike traditional constructors who <br/>went missing after the project ends, we <br/>take care of your interior even after our <br/>service ends.
</h5>		</div>
				</div>
					</div>
		</div>
				<div class="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-258c99d" 
                  style = {{width:"33.33%"}}
                data-id="258c99d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c0a504e elementor-widget elementor-widget-image" data-id="c0a504e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img width="112" height="112" 
                                                            src={Clipboard} 
                                                            class="attachment-full size-full" 
                                                            alt="" loading="lazy" class = "image1" />															</div>
				</div>
				<div class="elementor-element elementor-element-f26d8a2 elementor-widget elementor-widget-heading" data-id="f26d8a2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container" style = {{margin:"8% 0% 08%  0%"}}>
			<h3 class="elementor-heading-title-head elementor-size-default">Price match guarantee</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-25a3342 elementor-invisible elementor-widget elementor-widget-heading" data-id="25a3342" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:600}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title-main elementor-size-default">No hidden costs. We deliver our<br/>services at a pre estimated quote.<br/>If not, we return the surplus.
</h5>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
        </>

        
    );
};

export default FeaturesPage;