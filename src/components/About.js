import { useMemo, useState } from "react";
import TextArea from "../controls/textarea";

function About(props) {

    const [i, setI] = useState(0);
    const [data, setData] = useState(0);

    const memoTextArea = useMemo(()=> {
        return <TextArea />
    }, [i]);

    return (
        <>
            <h1> About Page </h1>
            <span>value of I is: {i}</span>
            <input value={data} onChange={()=> setData(data+1)}></input>
            <button onClick={()=> setData(data+1)}
                >Change Input Value</button>
            <button onClick={()=> setI(i+1)}>Change I</button>
            <div>
                <p>This will change on change of I only</p>
                {memoTextArea}
            </div>
            <div>
                <p>This will change on every render...</p>
                <TextArea />
            </div>
        </>
    );
    
}

export default About;