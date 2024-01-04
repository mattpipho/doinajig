import React from "react";
import { Divider } from "antd";

import TextConfiguration from "./TextConfiguration";

export default function TextOptions({ updateTextConfiguration, layoutConfig }) {
	return (
		<div>
			{layoutConfig.textVariables.map((textVariable) => {
				return (
					<div key={textVariable.name}>
						<Divider>{textVariable.name} - Configuration</Divider>
						<TextConfiguration
							type={textVariable.name}
							defaultValues={textVariable}
							updateTextConfiguration={updateTextConfiguration}
						/>
					</div>
				);
			})}
		</div>
	);
}
