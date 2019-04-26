import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.scss'
class Comp extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    render() {
        return (
            <div className="compa">
                React组件CompA
                <div className="blue">Blue color</div>
            </div>
        );
    }
}
export default Comp;