import React from "react";
import { List, Input, Row, Col } from "antd";

export default function SingleCardRow({ item, updateSingleName }) {
	return (
		<List.Item className="singleCardRow">
			{
				<Row>
					<Col span={12}>
						<Input
							className={"nameInput"}
							size={"small"}
							value={item.name}
							onChange={(e) =>
								updateSingleName(item.id, e.target.value)
							}
						/>
					</Col>
					<Col span={8}>
						<Input
							className={"tableInput"}
							size={"small"}
							value={item.table}
						/>
					</Col>
					<Col span={4}>
						<Input
							className={"mealChoice"}
							size={"small"}
							value={item.mealchoice}
						/>
					</Col>
				</Row>
			}
		</List.Item>
	);
}
