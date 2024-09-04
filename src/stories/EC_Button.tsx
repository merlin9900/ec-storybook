import React, { CSSProperties } from 'react';
import "./EC_Button.css";


type ButtonProps = {
  children: React.ReactNode,
  variant?: "primary" | "secondary" | "tertiary",
  backgroundColor: string,
  onClick?: () => void,
  color?: string,
  borderRadius?: string,
  fontWeight?: string
}

const EC_Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  onClick,
  borderRadius= "0",
  color= "white",
  fontWeight= "400",
  ...props
}) => {
  
  return (
    <button {...props} onClick={onClick} style={{backgroundColor, borderRadius, color, fontWeight}} className="button">♠ {children}</button>
  )
}

export default EC_Button
