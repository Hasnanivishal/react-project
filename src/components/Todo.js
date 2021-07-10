import { Component } from "react";
import Button from "../controls/button";
import Input from "../controls/input";
import Label from "../controls/label";
import { connect } from 'react-redux';
import { addNewTodo } from "../api-service/axios-config";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    submitForm = () => {
        this.props.setTodo(this.state.text);
    }

    setData = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (<div>
            <h1>Add A new Todo</h1>
            <div>
                <Label value="Todo Text"/>
                <Input type="text"
                    value={this.state.text}
                    placeholder="Enter a todo text"
                    inputChangeEvent={this.setData}
                    name="text"/>
            </div>
            <div>
                <Button name="Submit" buttonEvent={this.submitForm}/>
            </div>
        </div>)
    }
}

const addTodo = (text) => {
    let todo = {
        text: text,
        completed: true,
        otherInfo: "NA"
    };

    return dispatch => {
        addNewTodo(todo).then((res)=> {
            dispatch({
                type: 'ADD_TODO',
                payload: res
            });
        }).catch((err) => {
            console.error(err);
        });
    }
}

const mapDisptachToStore = (dispatch) => {
    return {
        setTodo: (text) => dispatch(addTodo(text))
    }
}

const mapStateToProps = (states) => {
    return {
        todoList : states.todos
    }
}

export default connect(mapStateToProps, mapDisptachToStore)(Todo);