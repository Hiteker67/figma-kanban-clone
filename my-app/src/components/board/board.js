import React from "react";
import './boardList.css';
import Card from "./card";
import addicon from '../assest/addicon.svg';

export default function Board({ data, title, status, style, onChange }) {
  // Sort data (Might need useMemo)
  let sorted = data.sort((a, b) => a.order - b.order);

  const onDragEnterHandler = (e) => {
    e.preventDefault();
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "boardContentArea") {
      setTimeout(() => {
        e.target.className = "boardContentArea hovered";
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "boardContentArea hovered") {
      setTimeout(() => {
        e.target.className = "boardContentArea";
      }, 0);
    }
  };
  const onDropHandler = (e) => {
    let cardInfo = JSON.parse(e.dataTransfer.getData("cardInfo"));
    let targetCardId = e.target.id;
    onChange(cardInfo, status, targetCardId);
    if (e.target.className === "boardContentArea hovered") {
      setTimeout(() => {
        e.target.className = "boardContentArea";
      }, 0);
    }
  };

  // returns JSX - Render cards
  const renderCards = () => {
    return sorted.map((item) => (
      <Card
        key={`status-${item.id}`}
        id={item.id}
        tag={item.tag}
        title={item.title}
        text={item.text}
        image={item.image}
        status={item.status}
        avatar={item.avatar}
        comments={item.comments}
        files={item.files}
        label={item.label}
      />
    ));
  };
  console.log(style);
  return (
    <div className="board-col">
      <div className="list">
        <div className="list-header-container">
          <div className="list-title"><div className="board-col-dot" style={style}></div><div>{title}</div></div>
          {status === "todo" && (<div><img src={addicon} /></div>)}
        </div>
        <div className="header-border-bottom" style={style}></div>
        <div
          className="boardContentArea"
          onDragEnter={onDragEnterHandler}
          onDragOver={onDragOverHandler}
          onDragLeave={onDragLeaveHandler}
          onDrop={onDropHandler}
        >
          {renderCards()}
        </div>
        {/* <a className="btn-list">+ Add another card</a> */}
      </div>
    </div>
  );
}
