import React from "react";
import {
	PDFViewer,
	Page,
	Document,
	StyleSheet,
	View,
} from "@react-pdf/renderer";

import CropMarks from "./CropMarks";
import PlaceCard from "./PlaceCard";

import config from "../configurations/page.json";

export default function Preview({
	data,
	showPlaceCardBorder,
	backgroundImage,
	textConfigurations,
}) {
	const renderPlaceCards = (page) => {
		let cards = [];
		for (let i = page * 10; i < page * 10 + 10; i++) {
			cards.push(
				<PlaceCard
					key={i}
					data={data[i]}
					showPlaceCardBorder={showPlaceCardBorder}
					backgroundImageName={backgroundImage}
					textConfigurations={textConfigurations}
				/>
			);
		}
		return cards;
	};

	const renderPages = () => {
		let pages = [];
		for (let p = 0; p <= Math.floor(data.length / 10); p++) {
			pages.push(
				<Page
					size={{
						width: config.pageSize.width,
						height: config.pageSize.height,
					}}
					style={styles.page}
					wrap={false}
					key={p}
				>
					<CropMarks />

					<View style={styles.placecardsWrapper}>
						{renderPlaceCards(p)}
					</View>
				</Page>
			);
		}
		return pages;
	};

	return (
		<div className="preview">
			<PDFViewer width={"100%"} height={"100%"} showToolbar={true}>
				<Document>{data.length > 0 && renderPages()}</Document>
			</PDFViewer>
		</div>
	);
}

const styles = StyleSheet.create({
	placecardsWrapper: {
		paddingTop: config.padding.top,
		paddingLeft: config.padding.left,
		position: "absolute",
		flexDirection: "row",
		flexWrap: "wrap",
		top: 0,
		left: 0,
		width: "100%",
	},
});
