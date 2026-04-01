import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "react-bootstrap";

interface BackButtonProps extends ButtonProps {
  to?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  to,
  label = "Back",
  variant = "light",
  className = "",
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
      return;
    }

    if (to) {
      navigate(to);
      return;
    }

    navigate(-1);
  };

  return (
    <Button
      variant={variant}
      className={`app-back-button ${className}`.trim()}
      onClick={handleClick}
      {...props}
    >
      <i className="bi bi-arrow-left"></i> {label}
    </Button>
  );
};

export default BackButton;
