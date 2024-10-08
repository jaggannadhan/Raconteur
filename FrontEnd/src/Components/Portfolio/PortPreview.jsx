import React, { useState, useEffect, Fragment, useRef } from "react";
import { 
    Container,
    Link,
    Stack,
    Avatar
  } from '@mui/material';
import { ReactTyped } from "react-typed";

import space from "../../../public/images/space.gif";
import stars from "../../../public/images/stars.gif";
import goldStars from "../../../public/images/goldStars.gif";

import "../../Styles/Portfolio/PortPreview.scss";
import * as CONSTANTS from "../../Constants/Constants";


const PortPreview = (props) => {
    const { currentUser } = props;
    const { user_info, portfolio_info, profile_info } = currentUser || {};
    const { name, picture: user_pic, address } = user_info || {};
    const { greetings, description, titles, resume, buy_me_something, picture: port_pic } = portfolio_info || {};
    const picture = port_pic || user_pic;
    const contRef = useRef(null);

    useEffect(() => {
        let elm = document.getElementById('pp-name');
        elm.addEventListener("mousemove", (e2) => {
            var rXP = (e2.pageX - elm.offsetLeft-elm.offsetWidth/2);
            var rYP = (e2.pageY - elm.offsetTop-elm.offsetHeight/2);
            
            elm.style.textShadow = +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)';
        });

        let infoBanner = document.getElementsByClassName("inf-banner")?.[0];
        if(infoBanner) {
            infoBanner.style.setProperty("--ch", `${(user_info?.address?.length || 0) + 12}ch`);
        }

    }, [currentUser]);

    useEffect(() => {
        if(contRef.current) {
            contRef.current.style.backgroundImage = `url(${space})`;
        }
    }, [currentUser])

    return (
        <Container className="port-preview-cont" ref={contRef}> 
            <section className="preview">
                <div className="content">

                    <h3>{greetings || "Hey! How are you?"}</h3>
                    <h1 id="pp-name" data-text={name}>{name}</h1>
                    
                    <h3 className="title">{titles ? "I'm a" : "I'm an"}
                        <span> 
                            <ReactTyped 
                                strings={titles || ['Extrordianary Person']} 
                                typeSpeed={100} 
                                backSpeed={100}
                                backDelay={1000}
                                loop
                            />
                        </span>
                    </h3>
                    <p>
                        {description}
                    </p>

                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" className='port-socials'> 
                        {CONSTANTS.socials.map((network) => {
                            let userLink = profile_info?.[network.name];
                            return (
                                userLink ?
                                <Link
                                    display="block"
                                    variant="body1"
                                    href={userLink || "#"}
                                    key={network.name}
                                    sx={{ mb: 0.5 }}
                                    target={userLink ? "_blank" : ""}
                                    rel="noreferrer"
                                >
                                    <network.icon className="svg_icons" /> 
                                </Link> : ""
                            )
                        })}
                    </Stack>

                    <section className="port-btns-sec1">

                        {
                            buy_me_something?.[0] ? 
                            <div className="buy-me"> 
                                <Link
                                    display="block"
                                    variant="body1"
                                    href={buy_me_something[1]}
                                    sx={{ mb: 0.5 }}
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    Buy me  
                                    <img className="shaker-btl" 
                                        src={getBuyMeIcon(buy_me_something[0])} 
                                    />
                                </Link>
                            </div> : ""
                        }
                        {
                            resume ? 
                            <div className="view-resume">
                                <Link
                                    display="block"
                                    variant="body1"
                                    href={resume}
                                    sx={{ mb: 0.5 }}
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    Resume
                                </Link>
                            </div> : ""
                        }
                    </section>
                    
                    

                </div>
                <div className="port-img">
                    <Avatar src={picture} alt={name} className="port-profile-pic"/>                    
                </div>
            </section>
            {
                address ?
                <Fragment>
                    <div className="inf-banner"> 
                        <span>&#183;</span>{` Based out of ${address} `} 
                    </div>
                    <div className="inf-banner shadow"> 
                        <span>&#183;</span>{` Based out of ${address} `} 
                    </div>
                </Fragment> : ""
            }
            
        </Container>        
    );
}

const getBuyMeIcon = (wish) => {
    let icon = CONSTANTS.buyMeItems.reduce((icon, item) => {
        if(item.name == wish) icon = item.icon;

        return icon;
    }, CONSTANTS.buyMeItems[0].icon);

    return icon
}

export default PortPreview;

