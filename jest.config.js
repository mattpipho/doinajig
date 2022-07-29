const jestConfig = {
	verbose: true,
	moduleNameMapper: {
		"\\.css$": "identity-obj-proxy",
		"\\.ttf$": "identity-obj-proxy",
	},
	transformIgnorePatterns: [
		"/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
	],
	testMatch: ["**/__tests__/**/*.js?(x)"],
};

module.exports = jestConfig;
