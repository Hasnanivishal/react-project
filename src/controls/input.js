function Input(props) {
    return (
        <input type={props.type} 
            onChange={props.inputChangeEvent}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}>
        </input>
    );
}

export default Input;
