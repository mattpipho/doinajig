import React from "react";

import { Svg, Line } from "@react-pdf/renderer";
import config from "../configurations/page.json";

export default function CropMarks() {
	const addLeftMarginLines = (numberOfLines) => {
		let lines = [];
		for (let i = 0; i < numberOfLines; i++) {
			let line = (
				<Line
					key={i}
					x1={0}
					x2={config.padding.left - 10}
					y1={i * config.itemSize.height + config.padding.top}
					y2={i * config.itemSize.height + config.padding.top}
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
					x1={config.padding.left + i * config.itemSize.width}
					x2={config.padding.left + i * config.itemSize.width}
					y1={config.padding.top + config.itemSize.height * 5 + 20}
					y2={config.padding.top + config.itemSize.height * 5 + 50}
					stroke={"black"}
				/>
			);
			lines.push(line);
		}
		return lines;
	};

	return (
		<Svg height={config.padding.top + config.itemSize.height * 5 + 30}>
			{addLeftMarginLines(6)}
			{addBottomMarginLines(3)}
		</Svg>
	);
}
