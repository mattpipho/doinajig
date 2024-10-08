import React from "react";
import { Select, Input, Row, Col } from "antd";

const TextConfiguration = ({
	type,
	defaultValues,
	updateTextConfiguration,
}) => {
	const fontOptions = [
		{ label: "Alexander Lettering", value: "AlexanderLettering" },
		{ label: "Alexandria", value: "Alexandria" },
		{ label: "Angelline", value: "Angelline" },
		{ label: "Apashy", value: "Apashy" },
		{ label: "BeautifullyDeliciousScript", value: "BeautifullyDeliciousScript" },
		{ label: "Bender", value: "Bender" },
		{ label: "Bickham Script", value: "BickhamScript" },
		{ label: "Champagne Limousines", value: "ChampagneLimousines" },
		{ label: "Edwardian Script", value: "EdwardianScript" },
		{ label: "Flowergirls", value: "Flowergirls" },
		{ label: "Freestyle Script", value: "FreestyleScript" },
		{ label: "Great Vibes", value: "GreatVibes" },
		{ label: "Hello Honey", value: "HelloHoney" },
		{ label: "Kaitlyn", value: "Kaitlyn" },
		{ label: "Masterblush", value: "Masterblush" },
		{ label: "Monotype Corsiva", value: "MonotypeCorsiva" },
		{ label: "Monterey", value: "Monterey" },
		{ label: "Perfetto", value: "Perfetto" },
		{ label: "Southland", value: "Southland" },
		{ label: "StrongFarmhouse", value: "StrongFarmhouse" },
		{ label: "TikiTropic", value: "TikiTropic" },
		{ label: "Times", value: "Times" },
		{ label: "Trajan Pro", value: "TrajanPro" },
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
						defaultValue={defaultValues.fontFamily}
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
						defaultValue={defaultValues.fontSize}
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
						defaultValue={defaultValues.textAlign}
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
						defaultValue={defaultValues.width}
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
						defaultValue={defaultValues.height}
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
						defaultValue={defaultValues.xPosition}
						style={{ width: 100, textAlign: "center" }}
						onChange={handleInputChange("xPosition")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Y Position</Col>
				<Col span="14">
					<Input
						defaultValue={defaultValues.yPosition}
						style={{ width: 100, textAlign: "center" }}
						onChange={handleInputChange("yPosition")}
					/>
				</Col>
			</Row>
			<Row>
				<Col span="10">Show Border</Col>
				<Col span="14">
					<Select
						defaultValue={defaultValues.borderOptions}
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
