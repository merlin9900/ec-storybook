import React, { CSSProperties } from 'react';
import "./EC_Button.css";


type ButtonProps = {
  children: React.ReactNode,
  variant: "primary" | "secondary" | "tertiary",
  backgroundColor: string,
}

const EC_Button: React.FC<ButtonProps> = ({
  children,
  variant="primary",
  backgroundColor,
  ...props
}) => {
  const variantStyles: Record<ButtonProps["variant"], CSSProperties> = ( {
    primary: {
      backgroundColor,
      borderRadius: "10px",
    },
    secondary: {
      backgroundColor,
      borderRadius: "100px",
    },
    tertiary: {
      backgroundColor,
      color: "#D0223A",
      fontWeight: "400",
    }
  })
  return (
    <button {...props} style={{ ...variantStyles[variant], backgroundColor }} className="button">♠ {children}</button>
  )
}

export default EC_Button
