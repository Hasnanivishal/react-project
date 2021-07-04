import React from "react";

function Label(props) {
    return (
        <label>{props.value}</label>
    );
}

export default React.memo(Label);