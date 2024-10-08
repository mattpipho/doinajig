import React from "react";

import { Select, Row, Col } from "antd";

const options = [
	{ label: "Blank", value: "blank.png" },
	{ label: "Box", value: "box.png" },
	{ label: "Brackets 2", value: "brackets2.png" },
	{ label: "Champagne", value: "champagne.png" },
	{ label: "Circle", value: "circle.png" },
	{ label: "Colorful Leaves", value: "colored-branches.png" },
	{ label: "Gold Rectangle", value: "gold-rectangle.png" },
	{ label: "Dark Purple", value: "dark-purple.png" },
	{ label: "Golf", value: "golf.png" },
	{ label: "Grapes", value: "grapes.png" },
	{ label: "Leather C8", value: "leather-c8.png" },
	{ label: "Palm Leaf", value: "palm-leaf.png" },
	{ label: "Palm Tree", value: "palm-tree.png" },
	{ label: "Pink Brush Stroke", value: "pink-brush-stroke.png" },
	{ label: "Olive Branch", value: "olive_branch.png" },
	{ label: "Oval", value: "oval.png" },
	{ label: "Red Wine", value: "red-wine.png" },
	{ label: "Swirl Bottle and Glass", value: "swirl-bottle-and-glass.png" },
	{ label: "Swirl Glass", value: "swirl-glass.png" },
	{ label: "Swirl Heart", value: "swirl-heart.png" },
	{ label: "White Wine", value: "white-wine.png" },
	{ label: "zBusiness Card", value: "business-card.png" },
];

export default function ImageSelection({ setBackgroundImage }) {
	return (
		<div>
			<Row>
				<Col>
					<div>Background Image</div>
				</Col>
				<Col>
					<Select
						defaultValue="blank.png"
						style={{ width: 200 }}
						onChange={setBackgroundImage}
						options={options}
					/>
				</Col>
			</Row>
		</div>
	);
}
