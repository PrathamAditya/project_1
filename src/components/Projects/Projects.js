import "./Projects.css";
import React from "react";
import Card from "../ProjectsCard/Card.js";
import cone from "../../assets/cone.png";
const Projects = () => {
    return (
        <div className="body">
        <Card
            id="1"
            number="1"
            title="Project 1"
            image= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ABC-2021-LOGO.svg/1200px-ABC-2021-LOGO.svg.png"
            description="This is the description of the project"
            twitter="https://twitter.com/ABC"
            discord="none"
            website="none"
            post=""
            time="10/30/2022 03:58:30 PM UTC"
        />
                <Card 
            id="2"
            number="2"
            title="Sweet Cone"
            image= {cone}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            twitter="https://twitter.com/sweetconenft"
            discord="https://discord.gg/sweetcone"
            website="https://sweetcone.art/"
            post=""
            time="11/1/2022 10:00:00 AM UTC"
        />
        
        
        </div>
        
    );
};

export default Projects;

