import React from "react";
import { Divider, Input, Row, Col } from "antd";

import TextConfiguration from "./TextConfiguration";

export default function TextOptions({
	defaultValues,
	updateTextConfiguration,
}) {
	return (
		<div>
			<Divider>Name Configuration</Divider>
			<TextConfiguration
				type={"name"}
				defaultValues={defaultValues}
				updateTextConfiguration={updateTextConfiguration}
			/>

			<Divider>Name</Divider>
			<Row>
				<Col span="10">Color</Col>
				<Col span="14">
					<Input />
				</Col>
			</Row>
			<Divider>Table Configuration</Divider>
			<TextConfiguration
				type={"table"}
				defaultValues={defaultValues}
				updateTextConfiguration={updateTextConfiguration}
			/>
			<Divider>Table</Divider>
			<div>Color</div>
			<Divider>Meal Choice</Divider>
			<div>Style</div>
			<div>Location</div>
		</div>
	);
}
