import React, { useState, useEffect } from "react";
import {
	Layout,
	Divider,
	Input,
	Button,
	List,
	Row,
	Col,
	Modal,
	Collapse,
	Checkbox,
} from "antd";
import SingleCardRow from "./SingleCardRow";
import Preview from "./Preview";
import LayoutSelection from "./LayoutSelection";
import ImageSelection from "./ImageSelection";
import TextOptions from "./TextOptions";

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Panel } = Collapse;

function OrderDetails() {
	const [showPlaceCardBorder, setShowPlaceCardBorder] = useState(false);
	const [backgroundImage, setBackgroundImage] = useState("blank.png");
	const [textConfigurations, setTextConfigurations] = useState();
	const [originalNames, setOriginalNames] = useState([]);
	const [importedNames, setImportedNames] = useState("");
	const [formattedList, setFormattedList] = useState([]);
	const [isNameImportVisible, setNameImportVisible] = useState(false);
	const [modalText, setModalText] = useState("");
	const [fontSize, setFontSize] = useState(10);
	const [layoutConfig, setLayout] = useState();

	useEffect(() => {
		const nameArray = importedNames
			.split("\n")
			.map((line, index) => {
				const [name, table, meal] = line.split("\t");
				return {
					id: index,
					name: name?.trim(),
					table: table?.trim(),
					meal: meal?.trim(),
				};
			})
			.sort((a, b) => b.name.length - a.name.length);
		setFormattedList(nameArray);
		setOriginalNames(nameArray);
	}, [importedNames]);

	useEffect(() => {
		let textConfigs = {};

		layoutConfig?.textVariables.forEach((textVariable) => {
			textConfigs[textVariable.name] = { ...textVariable };
		});
		setTextConfigurations(textConfigs);
	}, [layoutConfig]);

	const formatNames = () => {
		setImportedNames(modalText);
		setModalText("");
		setNameImportVisible(false);
	};

	const replaceText = () => {
		const newList = formattedList.map((item, index) => {
			if (index === 3) {
				return {
					...item,
					name: item.name.replace(" ", "*"),
				};
			} else {
				return { ...item };
			}
		});
		setFormattedList(newList);
	};

	const appendTable = () => {
		const newList = formattedList.map((item) => {
			return {
				...item,
				table: "Table " + item.table,
			};
		});
		setFormattedList(newList);
	};

	const updateSingleName = (id, name) => {
		//Use Splice to update
		const newList = formattedList.map((item) => {
			if (item.id === id) return { ...item, name };
			return item;
		});

		setFormattedList(newList);
	};
	const resetNames = () => {
		setFormattedList(originalNames);
	};
	const increaseFont = () => {
		setFontSize(fontSize + 1);
	};
	const decreaseFont = () => {
		setFontSize(fontSize - 1);
	};

	const updateTextConfiguration = (type, configuration, value) => {
		const typeConfigurations = {
			...textConfigurations[type],
			[configuration]: value,
		};

		setTextConfigurations({
			...textConfigurations,
			[type]: typeConfigurations,
		});
	};

	return (
		<Layout>
			<Header>
				<div>Menu Here</div>
			</Header>
			<Content>
				<h1>Order Details</h1>
				<Row gutter={16}>
					<Col offset={1} span={6}>
						<Collapse accordion>
							{/* <Divider plain>Order Number</Divider> */}
							{/* <Input placeholder="Order Number" /> */}
							<Panel header="Layout" key="0" showArrow={false}>
								<Row>
									<Col>
										<LayoutSelection
											setLayout={setLayout}
										/>
									</Col>
								</Row>
							</Panel>
							<Panel
								header="Guest List"
								key="3"
								showArrow={false}
							>
								<Button
									onClick={() => setNameImportVisible(true)}
								>
									Import Names
								</Button>
								<Button onClick={replaceText}>Replace</Button>
								<Button onClick={appendTable}>
									Append Table
								</Button>
								<Button onClick={resetNames}>Reset</Button>
								<Button onClick={increaseFont}>+</Button>
								<Button onClick={decreaseFont}>-</Button>
								<List
									id={"textInputList"}
									size="small"
									bordered
									dataSource={formattedList}
									renderItem={(item) => (
										<SingleCardRow
											item={item}
											updateSingleName={updateSingleName}
										/>
									)}
								/>
							</Panel>
							{layoutConfig?.backgroundImage === "select" && (
								<Panel
									header="Background Selection"
									key="1"
									showArrow={false}
								>
									<ImageSelection
										setBackgroundImage={setBackgroundImage}
									/>
								</Panel>
							)}
							{layoutConfig?.textVariables && (
								<Panel
									header="Text Configuration"
									key="2"
									showArrow={false}
								>
									<TextOptions
										key={layoutConfig.textVariables}
										updateTextConfiguration={
											updateTextConfiguration
										}
										layoutConfig={layoutConfig}
									/>
								</Panel>
							)}
						</Collapse>
					</Col>
					<Col span={14}>
						<Divider plain>Preview</Divider>
						{layoutConfig && (
							<Checkbox
								onChange={(e) =>
									setShowPlaceCardBorder(e.target.checked)
								}
							>
								Show Place Card Border
							</Checkbox>
						)}
						<Preview
							data={formattedList}
							fontSize={fontSize}
							showPlaceCardBorder={showPlaceCardBorder}
							backgroundImage={backgroundImage}
							textConfigurations={textConfigurations}
							layoutConfig={layoutConfig}
						/>
					</Col>
				</Row>
				<Modal
					title="Place Card Names"
					visible={isNameImportVisible}
					onOk={formatNames}
					onCancel={() => {
						setModalText("");
						setNameImportVisible(false);
					}}
				>
					<TextArea
						rows={10}
						value={modalText}
						onChange={(e) => setModalText(e.target.value)}
					/>
				</Modal>
			</Content>
		</Layout>
	);
}

export default OrderDetails;
