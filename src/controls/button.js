import { ThemeContext } from "../context/theme";
import React, { useContext } from "react";

const Button = React.forwardRef((props, ref) => {
    const context = useContext(ThemeContext);
    return (
        <ThemeContext.Consumer>
            {
                theme => (
                    <button ref={ref} onClick={props.buttonEvent}>{props.name}+{props.theme}+{theme}+{context}</button>
                )
            }
        </ThemeContext.Consumer>
    );
});

export default Button;