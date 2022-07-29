import React from "react";
import { Select, Input, Row, Col } from "antd";

const TextConfiguration = ({
	type,
	defaultValues,
	updateTextConfiguration,
}) => {
	const fontOptions = [
		{ label: "Champagne Limousines", value: "ChampagneLimousines" },
		{ label: "Monterey", value: "Monterey" },
		{ label: "Edwardian Script", value: "EdwardianScript" },
		{ label: "Perfetto", value: "Perfetto" },
		{ label: "Monotype Corsiva", value: "MonotypeCorsiva" },
		{ label: "Hello Honey", value: "HelloHoney" },
		{ label: "Southland", value: "Southland" },
	];
	let fontSizes = [];
	for (let i = 10; i < 73; i++) {
		fontSizes.push({ lable: i, value: i });
	}

	const alignmentOptions = [
		{ label: "Left", value: "left" },
		{ label: "Center", value: "center" },
		{ label: "Right", value: "right" },
	];

	let widthOptions = [];
	for (let i = 0; i < 255; i++) {
		widthOptions.push({ lable: i, value: i });
	}
	let heightOptions = [];
	for (let i = 0; i < 145; i++) {
		heightOptions.push({ lable: i, value: i });
	}

	const borderOptions = [
		{ label: "Yes", value: 1 },
		{ label: "No", value: 0 },
	];

	const handleConfigurationChange = (configuration) => (value) => {
		updateTextConfiguration(type, configuration, value);
	};
	const handleInputChange = (configuration) => (e) => {
		updateTextConfiguration(type, configuration, e.target.value);
	};

	return (
		<div>
			<Row>
				<Col span="10">Font Family</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].fontFamily}
						style={{ width: 200 }}
						options={fontOptions}
						onChange={handleConfigurationChange("fontFamily")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Font Size</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].fontSize}
						style={{ width: 100 }}
						options={fontSizes}
						onChange={handleConfigurationChange("fontSize")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Alignment</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].textAlign}
						style={{ width: 100 }}
						options={alignmentOptions}
						onChange={handleConfigurationChange("textAlign")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Width</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].width}
						style={{ width: 100 }}
						options={widthOptions}
						onChange={handleConfigurationChange("width")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Height</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].height}
						style={{ width: 100 }}
						options={heightOptions}
						onChange={handleConfigurationChange("height")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">X Position</Col>
				<Col span="14">
					<Input
						defaultValue={defaultValues[type].xPosition}
						style={{ width: 100, textAlign: "center" }}
						onChange={handleInputChange("xPosition")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Y Position</Col>
				<Col span="14">
					<Input
						defaultValue={defaultValues[type].yPosition}
						style={{ width: 100, textAlign: "center" }}
						onChange={handleInputChange("yPosition")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Show Border</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues[type].borderOptions}
						style={{ width: 100 }}
						options={borderOptions}
						onChange={handleConfigurationChange("borderWidth")}
					/>
				</Col>
			</Row>
		</div>
	);
};
export default TextConfiguration;
