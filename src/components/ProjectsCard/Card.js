import "./Card.css";
import React from "react";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import website from "../../assets/website.png";
import Countdown from 'react-countdown';
import {useState} from 'react';


const timeRemaining = (time) => {
    var date = new Date(time);
    return date.toString();
}

const Card = (props) => {
    const [isActive, setIsActive] = useState(true);
    const Completionist = () => {
        setIsActive(current => !current);
    
    }
    var des = (props.description).slice(0, 100);
    if (props.description.length > 100) {
        des += "...";
    }
    return (
        <React.Fragment>
            <div className="card-main">
                <div className="card">
                    <img src={props.image} alt="project image" />
                    <div className="card-content">
                        <h3 className="card-title">{props.title}</h3>
                        <p className="card-description">{des}</p>
                        <div className="info">
                            <a className={isActive? null: "disabled"} class="post" href={props.post} target="_blank" rel="noreferrer">{isActive? "Participate":"Ended"}</a>

                            <Countdown className="timer" date={timeRemaining(props.time)}>
                                <Completionist />
                            </Countdown>
                            {console.log(props.time)}
                            {console.log(Date.now(props.time))}
                        </div>
                    </div>
                    <div className="card-links">
                        {
                            props.twitter !== "none" ? (
                                <a href={props.twitter} target="_blank" rel="noreferrer">
                                    <img src={twitter} alt="twitter" className="card-icon" />
                                </a>
                            ) : null

                        }
                        {
                            props.discord !== "none" ? (
                                <a href={props.discord} target="_blank" rel="noreferrer">
                                    <img src={discord} alt="discord" className="card-icon" />
                                </a>
                            ) : null

                        }
                        {
                            props.website !== "none" ? (
                                <a href={props.website} target="_blank" rel="noreferrer">
                                    <img src={website} alt="website" className="card-icon" />
                                </a>
                            ) : null

                        }
                    </div>

                </div>

            </div>
        </React.Fragment>

    );
};





export default Card;
