import React from "react";
import "./MultiCircleSpinner.css";

interface MultiCircleSpinnerProps {
  fullScreen?: boolean;
  size?: number; // overall size in px, e.g. 80
}

const MultiCircleSpinner: React.FC<MultiCircleSpinnerProps> = ({
  fullScreen = false,
  size = 80,
}) => {
  const wrapperStyle: React.CSSProperties = fullScreen
    ? {
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    : {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      };

  return (
    <div style={wrapperStyle}>
      <div
        className="aj-spinner"
        style={{ width: size, height: size }}
        aria-label="loading"
      >
        <div className="aj-circle aj-circle-outer" />
        <div className="aj-circle aj-circle-middle" />
        <div className="aj-circle aj-circle-inner" />
      </div>
    </div>
  );
};

export default MultiCircleSpinner;
