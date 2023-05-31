import React from "react";
import { getLayout } from "../services/LayoutService";

import { Select, Row, Col } from "antd";

const options = [
	{ label: "Place Cards", value: "placecards" },
	{ label: "Leather", value: "leather" },
	{ label: "Leather - PC - (3.5x1.75)", value: "leather-placecard-small" },
];

export default function LayoutSelection({ setLayout }) {
	return (
		<div>
			<Row>
				<Col span={10}>
					<div>Layout</div>
				</Col>
				<Col span={14}>
					<Select
						defaultValue=""
						style={{ width: 200 }}
						onChange={(value) => setLayout(getLayout(value))}
						options={options}
					/>
				</Col>
			</Row>
		</div>
	);
}
