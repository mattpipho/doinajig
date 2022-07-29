import React from "react";

import { Svg, Line } from "@react-pdf/renderer";
import config from "../configurations/page.json";

export default function AlignmentGuides() {
	const addLeftMarginLines = (numberOfLines) => {
		let lines = [];
		for (let i = 0; i < numberOfLines; i++) {
			let line = (
				<Line
					key={i}
					x1={0}
					x2={config.marginLeft - 10}
					y1={i * config.placeCardHeight + config.marginTop}
					y2={i * config.placeCardHeight + config.marginTop}
					stroke={"black"}
				/>
			);
			lines.push(line);
		}
		return lines;
	};
	const addBottomMarginLines = (numberOfLines) => {
		let lines = [];
		for (let i = 0; i < numberOfLines; i++) {
			let line = (
				<Line
					key={i + "b"}
					x1={config.marginLeft + i * config.placeCardWidth}
					x2={config.marginLeft + i * config.placeCardWidth}
					y1={config.marginTop + config.placeCardHeight * 5 + 20}
					y2={config.marginTop + config.placeCardHeight * 5 + 50}
					stroke={"black"}
				/>
			);
			lines.push(line);
		}
		return lines;
	};

	return (
		<Svg height={config.marginTop + config.placeCardHeight * 5 + 30}>
			{addLeftMarginLines(6)}
			{addBottomMarginLines(3)}
		</Svg>
	);
}
