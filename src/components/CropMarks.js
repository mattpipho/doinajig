import React from "react";

import { Svg, Line } from "@react-pdf/renderer";

export default function CropMarks({ layoutConfig }) {
	const addLeftMarginLines = (numberOfLines) => {
		let lines = [];
		for (let i = 0; i < numberOfLines; i++) {
			let line = (
				<Line
					key={i}
					x1={0}
					x2={layoutConfig.padding.left - 10}
					y1={
						i * layoutConfig.itemSize.height +
						layoutConfig.padding.top
					}
					y2={
						i * layoutConfig.itemSize.height +
						layoutConfig.padding.top
					}
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
					x1={
						layoutConfig.padding.left +
						i * layoutConfig.itemSize.width
					}
					x2={
						layoutConfig.padding.left +
						i * layoutConfig.itemSize.width
					}
					y1={
						layoutConfig.padding.top +
						layoutConfig.itemSize.height * 5 +
						20
					}
					y2={
						layoutConfig.padding.top +
						layoutConfig.itemSize.height * 5 +
						50
					}
					stroke={"black"}
				/>
			);
			lines.push(line);
		}
		return lines;
	};

	return (
		<Svg
			height={
				layoutConfig.padding.top + layoutConfig.itemSize.height * 5 + 30
			}
		>
			{addLeftMarginLines(6)}
			{addBottomMarginLines(3)}
		</Svg>
	);
}
