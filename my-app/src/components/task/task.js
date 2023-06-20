import React from "react";
import './task.css';
import task_header_icon1 from '../assest/task_header_icon1.svg';
import task_header_icon2 from '../assest/task_header_icon2.svg';
import task_header_icon3 from '../assest/task_header_icon3.svg';
import filter_today from '../assest/filter_today.svg';
import share from '../assest/share.svg';



function Task() {
    return (
        <div className="task">
            <div className="task_header">
                <div className="icons">
                    <h1>Mobile App</h1>
                    <img src={task_header_icon1}></img>
                    <img src={task_header_icon2}></img>
                </div>
                <div className="icons group">
                    <img src={task_header_icon3}></img>
                </div>
            </div>
            <div className="dropbox">
                <div className="icons">
                    <img src={filter_today}></img>
                </div>
                <div className="icons dropbox_1">
                    <img src={share}></img>
                </div>
            </div>

        </div>

    )
}

export default Task;