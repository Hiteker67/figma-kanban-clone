import React, { useState } from "react";
import './boardList.css';
import dot from '../assest/dot.svg';
import message_box from '../assest/message_box.svg';
import files_img from '../assest/files_img.svg';


const tempColors = { "Bug Fix": 1, "UI Dev": 2, Testing: 3 };

export default function Card({ id, tag, title, text, status, image, avatar, comments, files }) {
  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("cardInfo", JSON.stringify({ id, status }));
    e.target.className += " ohhold";
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };
  const dragEndHandler = () => {
    setOnHold(false);
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "card") {
      setTimeout(() => {
        e.target.className = "card anotherCardOnTop";
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };
  const onDropHandler = (e) => {
    resetClassName(e);
    /**  
     TODO: Remove all anotherCardOnTop classnames 
     from DOM after drop complete.
    */
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === "card" ||
      e.target.className === "card anotherCardOnTop";
    if (isCard) {
      setTimeout(() => {
        e.target.className = "card";
      }, 0);
    }
  };

  return (
    <div
      id={id}
      className={`card ${onHold ? "hidden" : ""}`}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <div className="tag_container">
        <div className={`cardTag ${tag.toLowerCase()}`}>
          {tag}
        </div>
        <div>
          <img src={dot}></img>
        </div>
      </div>
      <div className="cardTitle">{title}</div>
      {!!text && (
        <div className="cardText">
          {text}
        </div>
      )}
      <div className="image-container">
        {image && image.length > 0 && image.map((i) => <img src={i} className="cardImage" />)}
      </div>
      <div className="footer">
        <div className="avatar-container">
           {avatar && avatar.length > 0 && avatar.map((i) => <img src={i} className="avatarImage" />)}
        </div>
        <div>
          <img src={message_box}></img>
          <span>{comments} comments</span>
        </div>
        <div>
          <img src={files_img}></img>
          <span>{files} files</span>
        </div>
      </div>





    </div>
  );
}
