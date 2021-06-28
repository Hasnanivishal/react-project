import React, { Component, Suspense } from "react";
import Multiple from "../controls/multiple";

// Lazy loading of a component
const LazyLodadedLabel = React.lazy(()=> import("../controls/label"));

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const propsObj = { color: 'blue' };
        const propsObj1 = { color: 'black', text: 'abc' };
        const { text, ...other} = propsObj1;
        return (
            <div>
              <h1>Home Page</h1>
              <h6>{text}</h6>
              <Suspense fallback={<div>Loading....</div>}>
                <LazyLodadedLabel value="Vishal"/>
              </Suspense>
              <Multiple.DatePicker color="red"></Multiple.DatePicker>
              <Multiple.DatePicker color={'red'}></Multiple.DatePicker>

              <Multiple.DatePicker color={1+2+3}></Multiple.DatePicker>

              <Multiple.DatePicker color={<strong>Test</strong>}></Multiple.DatePicker>

              {/* Default value as true */}
              <Multiple.DatePicker color></Multiple.DatePicker>
              <Multiple.DatePicker color={true}></Multiple.DatePicker>

              <Multiple.DatePicker {...propsObj}></Multiple.DatePicker>
              <Multiple.DatePicker {...other}></Multiple.DatePicker>

              <Multiple.ChildRender>
                Vishal is my name
              </Multiple.ChildRender>

              <Multiple.ChildRender>
                {<h4>Child data as html</h4>}
              </Multiple.ChildRender>

              <Multiple.ChildRender>{false}</Multiple.ChildRender>
              <Multiple.ChildRender>{null}</Multiple.ChildRender>
              <Multiple.ChildRender>{undefined}</Multiple.ChildRender>
              <Multiple.ChildRender>{true}</Multiple.ChildRender>

              <Multiple.ChildRender>{false && 1+2}</Multiple.ChildRender>
              <Multiple.ChildRender>{true && 1+2}</Multiple.ChildRender>

              <Multiple.ChildRender>{String(false)}</Multiple.ChildRender>

              <Multiple.ChildRender>
                <Multiple.ListRender data={[{id:1, name: 'vishal'}]}/>
              </Multiple.ChildRender>
            </div>
        );
    }
}

export default Home;