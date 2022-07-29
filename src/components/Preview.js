import React from "react";
import {
	PDFViewer,
	Page,
	Document,
	StyleSheet,
	View,
} from "@react-pdf/renderer";

import AlignmentGuids from "./AlignmentGuides";
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
				<Page size="LETTER" style={styles.page} wrap={false} key={p}>
					<AlignmentGuids />

					<View style={styles.placecardsWrapper}>
						{renderPlaceCards(p)}
					</View>
				</Page>
			);
		}
		return pages;
	};

	return (
		<>
			{/* <div>
				<div>Debug:</div>
				<div>Background Image: {backgroundImage}</div>
				<div>
					Text Configurations - Name:{" "}
					{JSON.stringify(textConfigurations.name)}
				</div>
				<hr />
				<div>
					Text Configurations - Table:{" "}
					{JSON.stringify(textConfigurations.table)}
				</div>
			</div> */}
			<div className="preview">
				<PDFViewer width={"100%"} height={"100%"} showToolbar={true}>
					<Document>{data.length > 0 && renderPages()}</Document>
				</PDFViewer>
			</div>
		</>
	);
}

const styles = StyleSheet.create({
	placecardsWrapper: {
		marginTop: config.marginTop,
		marginLeft: config.marginLeft,
		position: "absolute",
		flexDirection: "row",
		flexWrap: "wrap",
		top: 0,
		left: 0,
		width: "100%",
	},
});
