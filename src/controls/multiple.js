import { Fragment } from "react";

const Multiple = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    },
    ListRender: function ListRender(props) {
        return (
            <ul>
                {
                    props.data.map((d)=> <li key={d.id}>{d.name}</li>)
                }
            </ul>
        );
    },
    ChildRender: function ChildRender(props){
        return(
            <div>
                {props.children}
            </div>
        )
    }
}
  
export default Multiple;