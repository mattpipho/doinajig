import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

import { registerFonts } from "../services/FontService";

export default function PlaceCard({
	data,
	showPlaceCardBorder,
	backgroundImageName,
	textConfigurations,
	layoutConfig,
}) {
	const [backgroundImage, setBackgroundImage] = useState();
	const [mealIcon, setMealIcon] = useState();

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

	useEffect(() => {
		if (data && data.hasOwnProperty("meal") && data.meal !== undefined) {
			const { meal } = data;
			const fetchIcon = async () => {
				try {
					const response = await import(`../images/${meal}.png`);
					setMealIcon(response.default);
				} catch (err) {
					console.log(err);
				}
			};
			fetchIcon();
		}
	}, [data]);

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
			style={{
				width: layoutConfig.itemSize.width,
				height: layoutConfig.itemSize.height,
				borderWidth: showPlaceCardBorder ? 1 : 0,
				borderColor: "green",
			}}
		>
			{backgroundImage && (
				<Image src={backgroundImage} style={styles.image} />
			)}

			{mealIcon && <Image src={mealIcon} style={styles.mealIcon} />}

			{layoutConfig?.textVariables.map((textVariable) => {
				const textValue = data ? data[textVariable.name] : "";

				return (
					textConfigurations[textVariable.name] && (
						<View
							key={textVariable.name}
							style={[
								styles.textArea,
								getPositionStyle(textVariable.name),
							]}
						>
							<Text
								style={[
									{
										fontFamily:
											textConfigurations[
												textVariable.name
											].fontFamily,
										fontSize:
											textConfigurations[
												textVariable.name
											].fontSize,
										color: textConfigurations[
											textVariable.name
										].color,
										textAlign:
											textConfigurations[
												textVariable.name
											].textAlign,
										width: "100%",
										lineHeight: "1",
										borderColor: "blue",
									},
								]}
							>
								{textValue?.replaceAll("^", "\n")}
							</Text>
						</View>
					)
				);
			})}

			{/* <View style={[styles.nameArea, getPositionStyle("name")]}>
				<Text
					style={[
						//styles.name,
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
						//styles.table,
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
			</View> */}
		</View>
	);
}
const styles = StyleSheet.create({
	textArea: {
		justifyContent: "center",
		position: "absolute",
		borderColor: "red",
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
	mealIcon: {
		position: "absolute",
		top: 110,
		left: 215,
		width: 20,
		height: 20,
	},
});
