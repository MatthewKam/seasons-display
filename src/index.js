import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
	//Bable compiles below to constructor
	state = { lat: null, errorMessage: "" };

  //lifecycle methods
	componentDidMount() {
		// console.log("My component was rendered to the screen");
		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				this.setState({
					lat: position.coords.latitude,
				}),
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
	componentDidUpdate() {
		// console.log("My component did update, it was rerendered");
	}

	//helper method
	renderContent() {
		const { errorMessage, lat } = this.state;
		if (errorMessage && !lat) return <div>Error: {errorMessage}</div>;
		if (!errorMessage && lat) return <SeasonDisplay lat={lat} />;
		return <Spinner message="Please accept location request" />;
	}
	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}
ReactDOM.render(<App />, document.getElementById("root"));
