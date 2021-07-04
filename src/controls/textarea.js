import { useEffect, useState } from "react";

let renderTime = 0;
function TextArea() {
    useEffect(()=> {
        renderTime++;
    });

    return (
        <textarea value={renderTime} readOnly></textarea>
    );
}

export default TextArea;