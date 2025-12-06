import React from "react";
import { Spinner } from "react-bootstrap";

type SpinnerSize = "sm" | "md" | "lg";

interface LoadingSpinnerProps {
  fullScreen?: boolean; // center on full page
  size?: SpinnerSize; // spinner size
  text?: string; // optional label
}

const sizeToStyle: Record<SpinnerSize, React.CSSProperties> = {
  sm: { width: "1.5rem", height: "1.5rem" },
  md: { width: "2.5rem", height: "2.5rem" },
  lg: { width: "3.5rem", height: "3.5rem" },
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullScreen = false,
  size = "md",
  text,
}) => {
  const wrapperStyle: React.CSSProperties = fullScreen
    ? {
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }
    : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      };

  return (
    <div style={wrapperStyle}>
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        style={sizeToStyle[size]}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {text && <span className="mt-2 fw-semibold">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
