function Button(props) {
    return (
        <button onClick={props.buttonEvent}>{props.name}</button>
    );
}

export default Button;