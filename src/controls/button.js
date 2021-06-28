import { ThemeContext } from "../context/theme";
import React from "react";

const Button = React.forwardRef((props, ref) => {
    return (
        <ThemeContext.Consumer>
            {
                theme => (
                    <button ref={ref} onClick={props.buttonEvent}>{props.name}+{props.theme}+{theme}</button>
                )
            }
        </ThemeContext.Consumer>
    );
});

export default Button;