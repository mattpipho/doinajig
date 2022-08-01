import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import config from "../configurations/page.json";

import { registerFonts } from "../services/FontService";

//import { useMainContext } from "../context/mainContext";

export default function PlaceCard({
	data,
	showPlaceCardBorder,
	backgroundImageName,
	textConfigurations,
}) {
	const { name, table } = { ...data };
	const [backgroundImage, setBackgroundImage] = useState();

	registerFonts();

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(
					`../designs/${backgroundImageName}`
				);
				setBackgroundImage(response.default);
			} catch (err) {
				console.log(err);
			}
		};

		fetchImage();
	}, [backgroundImageName]);

	const getPositionStyle = (type) => {
		let top =
			textConfigurations[type].yPosition -
			textConfigurations[type].height / 2;
		top = top > 0 ? top : 0;

		let left =
			textConfigurations[type].xPosition -
			textConfigurations[type].width / 2;

		left = left > 0 ? left : 0;

		const width = textConfigurations[type].width;
		const height = textConfigurations[type].height;

		return {
			top,
			left,
			width,
			height,
			borderWidth: textConfigurations[type].borderWidth,
		};
	};
	return (
		<View
			style={[
				styles.placeCard,
				{
					borderWidth: showPlaceCardBorder ? 1 : 0,
					borderColor: "green",
				},
			]}
		>
			{backgroundImage && (
				<Image src={backgroundImage} style={styles.image} />
			)}
			<View style={[styles.nameArea, getPositionStyle("name")]}>
				<Text
					style={[
						styles.name,
						{
							fontFamily: textConfigurations.name.fontFamily,
							fontSize: textConfigurations.name.fontSize,
							color: textConfigurations.name.color,
							textAlign: textConfigurations.name.textAlign,
						},
					]}
				>
					{name?.replaceAll("^", "\n")}
				</Text>
			</View>
			<View style={[styles.tableArea, getPositionStyle("table")]}>
				<Text
					style={[
						styles.table,
						{
							fontFamily: textConfigurations.table.fontFamily,
							fontSize: textConfigurations.table.fontSize,
							color: textConfigurations.table.color,
							textAlign: textConfigurations.table.textAlign,
						},
					]}
				>
					{table?.replaceAll("^", "\n")}
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	placeCard: {
		width: config.itemSize.width,
		height: config.itemSize.height,
	},
	nameArea: {
		justifyContent: "center",
		position: "absolute",
		borderColor: "red",
		// backgroundColor: "green",
	},
	name: {
		width: "100%",
		lineHeight: "1",
		borderColor: "blue",
	},
	tableArea: {
		justifyContent: "center",
		position: "absolute",
		// borderColor: "red",
		// backgroundColor: "green",
		marginTop: 0,
	},
	table: {
		lineHeight: "1",
	},
	image: {
		// borderWidth: 1,
		// borderColor: "red",
	},
});
