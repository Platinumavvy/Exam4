import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/Result";
import KeyPadComponent from "./components/Keypad";

class App extends Component {
	constructor() {
		super();

		this.state = {
			result: "",
		};
	}

	onClick = (button) => {
		if (button === "=") {
			this.calculate();
		} else if (button === "C") {
			this.reset();
		} else if (button === "CE") {
			this.backspace();
		} else {
			this.setState({
				result: this.state.result + button,
			});
		}
	};

	calculate = () => {
		var checkResult = "";
		if (this.state.result.includes("--")) {
			checkResult = this.state.result.replace("--", "+");
		} else {
			checkResult = this.state.result;
		}

		try {
			this.setState({
				result: (eval(checkResult) || "") + "",
			});
		} catch (e) {
			this.setState({
				result: "error",
			});
		}
	};

	reset = () => {
		this.setState({
			result: "",
		});
	};

	backspace = () => {
		this.setState({
			result: this.state.result.slice(0, -1),
		});
	};

	render() {
		return (
			<div>
				<div className="calculator-body">
					<h1 className="title">Calculator app</h1>
					<ResultComponent result={this.state.result} />
					<KeyPadComponent onClick={this.onClick} />
					<footer className="footer">
						Resources Patel, Nitin. “How to Build a Simple Calculator
						Application with React.js.” Medium, Medium, 2 July 2018,
						https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd.{" "}
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
