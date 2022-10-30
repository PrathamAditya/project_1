import "./Card.css";
import React from "react";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import website from "../../assets/website.png";
import Countdown from 'react-countdown';

// Time remaining in UTC
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <span>Ended!</span>;
    } else {
        // Render a countdown
        return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    }
};

const Card = (props) => {
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
                            <a className="post" href={props.post} target="_blank" rel="noreferrer">Participate</a>
                            <Countdown date={ Date.now(props.time)}/>
                            {console.log(props.time)}
                            {console.log(Date.now())}
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
