import React from "react";
import "./LessonCard.css";
import { Link } from "react-router-dom";
import { LessonCardProps } from "../types/types";

const LessonCard: React.FC<LessonCardProps> = ({
  imageSrc,
  title,
  description,
  lessonUrl,
}) => (
  <div className="lesson-card">
    <img src={imageSrc} alt={title} className="lesson-img" />
    <div className="lesson-info">
      <Link to={lessonUrl} className="lesson-title">
        {title}
      </Link>
      <p className="lesson-description">{description}</p>
    </div>
  </div>
);

export default LessonCard;
