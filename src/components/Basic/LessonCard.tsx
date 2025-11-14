import React from "react";
import "./LessonCard.css";
import { Link, useNavigate } from "react-router-dom";
import { LessonCardProps } from "../../types/types";

const LessonCard: React.FC<LessonCardProps> = ({
  imageSrc,
  title,
  description,
  lessonUrl,
}) => {
  const navigate = useNavigate();

  // Handle card click
  const handleDetailPage = () => {
    navigate(lessonUrl);
  };
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div
        className="lesson-card "
        onClick={handleDetailPage}
      >
        <img src={imageSrc} alt={title} className="lesson-img" />
        <div className="lesson-info">
          <Link to={lessonUrl} className="lesson-title">
            {title}
          </Link>
          <p className="lesson-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
