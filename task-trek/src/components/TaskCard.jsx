import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">Exemplo de texto</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
