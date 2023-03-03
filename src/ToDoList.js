import React from "react";
import { Component } from "react";

class ToDoList extends Component{
    render(){
        return <tr>
            <td>{this.props.name}</td>
        </tr>
    }
}
export default ToDoList;