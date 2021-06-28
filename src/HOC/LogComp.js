import { Component } from "react";

function logComp(WrappedComp) {
    class LogComp extends Component {

        componentDidUpdate(prevProps) {
            console.log('old props...', prevProps);
            console.log('new props', this.props);
        }
        render() {
            return <WrappedComp {...this.props} />;
        }
    }

    return LogComp;
}

export default logComp;