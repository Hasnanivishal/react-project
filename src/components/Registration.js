import React, { Component, createRef } from "react";
import { ThemeContext } from "../context/theme";
import Button from "../controls/button";
import Input from "../controls/input";
import Label from "../controls/label";

class Resgistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            password : ''
        }
        this.ref = React.createRef();
    }
    static contextType = ThemeContext;

    submitForm = () => {
        console.log('submit is called...', this.ref.current.outerHTML);
    }

    setData = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div>
            <h5>Registration Form</h5>
            <div>
                <Label value="Name"/>
                <Input type="text"
                    value={this.state.name}
                    placeholder="Enter a name"
                    inputChangeEvent={this.setData}
                    name="name"/>
            </div>
            <div>
                <Label value="Password"/>
                <Input type="password"
                    value={this.state.password}
                    placeholder="Enter a password"
                    inputChangeEvent={this.setData}
                    name="password"/>
            </div>
            <div>
                <Button name="Register" ref={this.ref} theme={this.context} buttonEvent={this.submitForm}/>
            </div>
        </div>
    }
}

export default Resgistration;