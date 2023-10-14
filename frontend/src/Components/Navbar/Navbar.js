import React, {useState, useEffect} from 'react';
import Dexterio from '../../assets/dexterio.png';

import { Auth } from 'aws-amplify';
import './Navbar.css';

const menuItems = [
    {
        title:'How it works',
        url:'/howitworks',
        cName:'nav-links'
    },
    {
        title:'Projects',
        url:'#',
        cName:'nav-links'
    },
    {
        title:'Prefab Interior',
        url:'#',
        cName:'nav-links'
    },
    {
        title:'Design Quiz',
        url:'#',
        cName:'nav-links'
    }
];

function Navbar (props) {

    let navBarClasses = useState(['NavbarItems']);
    let [scrolled, setScrolled] = useState(false);
    
    if(scrolled) {
        navBarClasses.push('scrolled');
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    async function handleLogOut(event) {
        event.preventDefault();
        try {
            Auth.signOut();
            props.auth.setAuthStatus(false);
            props.auth.setUser(null);
        }catch(error) {
          console.log(error.message);
        }
      }

    return (
        <nav className = {navBarClasses.join(" ")}>
            <div className = "dex-head">
                 <img src = {Dexterio} id= "logo"alt = '' width= '225px' height= '76px'/> 
            </div>    

            <div className= "vertical-line">

            </div>
            <ul className = "nav-menu">
                {menuItems.map((item,index) => {
                    return (
                        <li key ={index} className = "nav-list">
                        <a className = {item.cName} href= {item.url}>
                         {item.title}
                        </a>
                        </li>
                    )
                })}
                
            </ul>
            {!props.auth.isAuthenticated && (
            <div className="elementor-button-wrapper">
                <a href="/hello" className="elementor-button-link elementor-button elementor-size-xs" role="button">
                    <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon elementor-align-icon-right">
                            <i aria-hidden="true" className="fa fa-arrow-right"></i> </span>
                        <span className="elementor-button-text">Get Started</span>
                    </span>
                </a>
            </div>
            )}

            {props.auth.isAuthenticated && (
            <div className="has_ma_el_bg_slider elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-be9500f" data-id="be9500f" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-d52fee4 sticky-header elementor-align-right elementor-widget elementor-widget-button animated fadeIn" data-id="d52fee4" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:1200}" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                                <a href="/" onClick={handleLogOut} className="elementor-button-link elementor-button elementor-size-xs" role="button">
                                    <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon elementor-align-icon-right">
                                            <i aria-hidden="true" className="fa fa-arrow-right"></i> </span>
                                        <span className="elementor-button-text">Log Out</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}


        </nav>
    );
}

export default Navbar;