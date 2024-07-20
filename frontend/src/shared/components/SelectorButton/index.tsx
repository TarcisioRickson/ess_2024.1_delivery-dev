import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./index.module.css";

interface SelectorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  selected?: Boolean
  font_size?: number
  side_padding?: number
  line_size?: number
  width?: string
  color?: string
}

/*
  Botão para ser usado no PageSelector; quando selected = true, 
*/
const SelectorButton = ({ children, selected=false, font_size=16, side_padding=10, line_size=2, width="100%", color="black", ...buttonProps }: SelectorButtonProps) => {
  // Retorna o estilo do botão de acordo com ele está selecionado ou não.
  function set_button_style(is_selected) {
    if (is_selected) {
      return `${styles.button} ${styles.button_selected}`
    }
    else {
      return styles.button
    }
  }

  const buttonStyle = {
    "--width": width,
    "--font_size": `${font_size}px`,
    "--color": color,
    "--side_padding": `${side_padding}px`,
    "--line_size": `${line_size}px`
  } as React.CSSProperties

  return (
    <button {...buttonProps} className={set_button_style(selected)} style={buttonStyle}>
      {children}
    </button>
  );
};

export default SelectorButton;
