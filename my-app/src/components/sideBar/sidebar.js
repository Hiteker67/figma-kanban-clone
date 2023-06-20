import React from "react";
import "./sidebar.css";
import logo from "../assest/logo.svg";
import logo1 from "../assest/logo1.svg";
import home from "../assest/home.svg";
import message from "../assest/message.svg";
import tasks from "../assest/tasks.svg";
import members from "../assest/members.svg";
import settings from "../assest/settings.svg";
import addSquare from "../assest/addSquare.svg";
import dot from "../assest/dot.svg";
import lamp from "../assest/lamp.svg";




function Sidebar() {
    return (
        <div className="root">
            <div className="sidebar_header">
                <div className="project_m">
                    <img src={logo} className="logo"></img>
                    <p className="header_title">Project M.</p>
                </div>
                <div className="project_m_logo">
                    <img src={logo1} className="logo1"></img>
                </div>


            </div>

            <div className="sidebar_section1">
                <div className="section1_items">
                    <img src={home} className="home"></img>
                    <p>Home</p>
                </div>
                <div className="section1_items">
                    <img src={message} className="message"></img>
                    <p>Messages</p>
                </div>
                <div className="section1_items">
                    <img src={tasks} className="tasks"></img>
                    <p>Tasks</p>
                </div>
                <div className="section1_items">
                    <img src={members} className="members"></img>
                    <p>Members</p>
                </div>
                <div className="section1_items">
                    <img src={settings} className="settings"></img>
                    <p>Settings</p>
                </div>
            </div>

            <div className="sidebar_section2">
                <div className="section2_header">
                    <p className="section2_header_title">MY PROJECTS</p>
                    <div className="section2_header_image">
                        <img src={addSquare}></img>
                    </div>
                </div>
                <div className="section2_items active">
                    <div className="dot green"></div>
                    <p className="item">Mobile App</p>
                    <img src={dot}></img>
                </div>
                <div className="section2_items">
                    <div className="dot orange"></div>
                    <p className="item">Website Redesign</p>
                </div>
                <div className="section2_items">
                    <div className="dot pink"></div>
                    <p className="item">Design System</p>
                </div>
                <div className="section2_items">
                    <div className="dot blue"></div>
                    <p className="item">Wireframes</p>
                </div>
            </div>

            <div className="sidebar_section3">
                <div className="section3_image">
                    <img src={lamp} className="image_lighton"></img>
                </div>
                <div className="section3_header">
                    Thoughts Time
                </div>
                <div className="section3_body">
                    We don’t have any notice for you, till then you can share your thoughts with your peers.
                </div>
                <div className="section3_button">
                    <button className="button">Write a message</button>
                </div>
            </div>
            

        </div>


    )
}


export default Sidebar;


