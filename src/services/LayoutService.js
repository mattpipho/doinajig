import placeCardLayout from "../configurations/page-placecards.json";
import leatherLayout from "../configurations/page-leather.json";

export const getLayout = (type) => {
	if (type === "leather") {
		return leatherLayout;
	}
	return placeCardLayout;
};

export const getNumberOfItemsPerPage = (layoutConfig) => {
	const vertical = Math.floor(
		(layoutConfig.pageSize.height - layoutConfig.padding.top) /
			layoutConfig.itemSize.height
	);
	const horizontal = Math.floor(
		(layoutConfig.pageSize.width - layoutConfig.padding.left) /
			layoutConfig.itemSize.width
	);

	return {
		vertical,
		horizontal,
		total: vertical * horizontal,
	};
};
