import React from "react";
import { Table } from "antd";

export const DataTable = ({ layoutConfig, data }) => {
	if (!layoutConfig.textVariables) return;
	const columns = layoutConfig?.textVariables.map((textVariable) => {
		return {
			title: textVariable.name,
			dataIndex: textVariable.name,
			key: textVariable.name,
		};
	});

	return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
