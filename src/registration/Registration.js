import { Component } from "react";
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
    }

    submitForm = () => {
        console.log('submit is called...', this.state);
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
                <Button name="Register" buttonEvent={this.submitForm}/>
            </div>
        </div>;
    }
}

export default Resgistration;