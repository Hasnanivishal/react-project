import { Component } from "react";
import { getAllTodos } from "../api-service/axios-config";
import { connect } from 'react-redux';
import Todo from "./Todo";

class TodoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedTodo: {}
        }
    }

    componentDidMount() {
        this.props.loadTodos();
    }

    updateSelectedTodo = (todo) => {
        this.setState({
            selectedTodo: todo
        });
    }

    render() {
        if (this.props.todoList === null) 
        {
            return <h1>Loading....</h1>
        }

        return (<>
        <Todo />
        <div class="row">
            <div className="col-md-6 bg-primary">
                <h1>TODO List</h1>
                <ul>
                    { 
                        this.props.todoList?.map((todo) => 
                            <button key={todo.id} onClick={() => this.updateSelectedTodo(todo)}>{todo.text}</button>
                        )
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <h1>{this.state.selectedTodo.text}</h1>
                <h1>{this.state.selectedTodo.otherInfo}</h1>
            </div>
        </div>
        </>);
    }
}

const getTodos = () => {
    return dispatch => {
        getAllTodos().then((res)=> {
            dispatch({
                type: 'LOAD_TODO',
                payload: res
            });
        }).catch((err) => {
            console.error(err);
            dispatch({
                type: 'LOAD_TODO',
                payload: []
            });
        });
    }
}

const mapStateToProps = (states) => {
    return {
        todoList : states.todos
    }
}

const mapDispatchToStroe = (dispatch) => {
    return {
        loadTodos: () =>  dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToStroe)(TodoList);