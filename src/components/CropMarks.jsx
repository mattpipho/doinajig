import React from "react";
import { Svg, Line } from "@react-pdf/renderer";
import { getNumberOfItemsPerPage } from "../services/LayoutService";

export default function CropMarks({ layoutConfig }) {
	const numberOfItemsPerPage = getNumberOfItemsPerPage(layoutConfig);

	const addLeftMarginLines = (numberOfLines) => {
		let lines = [];
		for (let i = 0; i <= numberOfLines; i++) {
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
		for (let i = 0; i <= numberOfLines; i++) {
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
						layoutConfig.itemSize.height *
							numberOfItemsPerPage.vertical +
						20
					}
					y2={
						layoutConfig.padding.top +
						layoutConfig.itemSize.height *
							numberOfItemsPerPage.vertical +
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
		<Svg height={layoutConfig.pageSize.height}>
			{addLeftMarginLines(numberOfItemsPerPage.vertical)}
			{addBottomMarginLines(numberOfItemsPerPage.horizontal)}
		</Svg>
	);
}
