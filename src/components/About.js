import { useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TextArea from "../controls/textarea";

function About({match}) {

    const [i, setI] = useState(0);
    const [data, setData] = useState(0);
    const {name} = useParams();
    const history = useHistory();

    const memoTextArea = useMemo(()=> {
        return <TextArea />
    }, [i]);
    
    const goBackHandler = () => {
        history.goBack();
    }

    return (
        <>
            <h1> About Page {match?.params?.name} and from hook {name}</h1>
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

            <div>
                <button onClick={goBackHandler}>Go Back...</button>
            </div>
        </>
    );
    
}

export default About;