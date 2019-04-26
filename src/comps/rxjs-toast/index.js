import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.scss'
import toast from "../Toast/index"
class Comp extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    componentDidMount() {
        toast("1111111111")
        toast("22222222")
        toast("333333")
    }

    render() {
        return (
            <div className="rxjs-toast">
                rxjs-toast
            </div>
        );
    }
}
export default Comp;