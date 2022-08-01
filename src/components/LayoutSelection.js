import React from "react";
import { getLayout } from "../services/LayoutService";

import { Select, Row, Col } from "antd";

const options = [
	{ label: "Place Cards", value: "placecards" },
	{ label: "Leather", value: "leather" },
];

export default function LayoutSelection({ setLayout }) {
	return (
		<div>
			<Row>
				<Col>
					<div>Layout</div>
				</Col>
				<Col>
					<Select
						defaultValue="placecards"
						style={{ width: 200 }}
						onChange={(value) => setLayout(getLayout(value))}
						options={options}
					/>
				</Col>
			</Row>
		</div>
	);
}
