import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: "sun",
	},
	winter: {
		text: "Burr, it's chill l l l lly!",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = (props) => {
	const { lat } = props;
	console.log("lat " + lat);

	const season = getSeason(lat, new Date().getMonth());
	console.log(season);

	const { text, iconName } = seasonConfig[season]; //{text, iconName}
	return (
		<div className={`season-display${" " + season}`}>
			<i className={`icon-right massive icon${" " + iconName}`}></i>
			<h1>{text}</h1>
			<i className={`icon-left massive icon${" " + iconName}`}></i>
		</div>
	);
};

export default SeasonDisplay;
