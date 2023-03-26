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
import { getNumberOfItemsPerPage } from "../services/LayoutService";

export default function Preview({
	data,
	showPlaceCardBorder,
	backgroundImage,
	textConfigurations,
	layoutConfig,
}) {
	if (!layoutConfig) return <div>No Layout Selected</div>;

	const itemsPerPage = getNumberOfItemsPerPage(layoutConfig).total;

	const renderPlaceCards = (page) => {
		let cards = [];
		for (
			let i = page * itemsPerPage;
			i < page * itemsPerPage + itemsPerPage;
			i++
		) {
			cards.push(
				<PlaceCard
					key={i}
					data={data[i]}
					showPlaceCardBorder={showPlaceCardBorder}
					backgroundImageName={backgroundImage}
					textConfigurations={textConfigurations}
					layoutConfig={layoutConfig}
				/>
			);
		}
		return cards;
	};

	const renderPages = () => {
		let pages = [];
		for (let p = 0; p <= Math.floor(data.length / itemsPerPage); p++) {
			pages.push(
				<Page
					size={{
						width: layoutConfig.pageSize.width,
						height: layoutConfig.pageSize.height,
					}}
					style={styles.page}
					wrap={false}
					key={p}
				>
					<CropMarks layoutConfig={layoutConfig} />

					<View
						style={{
							...styles.placecardsWrapper,
							paddingTop: layoutConfig.padding.top,
							paddingLeft: layoutConfig.padding.left,
						}}
					>
						{renderPlaceCards(p)}
					</View>
				</Page>
			);
		}
		return pages;
	};

	return (
		<div className="preview">
			{/* <div>DEBUG: {JSON.stringify(textConfigurations)}</div> */}
			<PDFViewer width={"100%"} height={"100%"} showToolbar={true}>
				<Document>{data.length > 0 && renderPages()}</Document>
			</PDFViewer>
		</div>
	);
}

const styles = StyleSheet.create({
	placecardsWrapper: {
		position: "absolute",
		flexDirection: "row",
		flexWrap: "wrap",
		top: 0,
		left: 0,
		width: "100%",
	},
});
