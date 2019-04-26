import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.scss'
import CompA from "../CompA/index";
class Comp extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    render() {
        return (
            <div className="container">
                顶层组件
                <div className="red">React组件Container</div>
                <div className="blue">Blue color</div>
                <CompA/>
            </div>
        );
    }
}
export default Comp;