import placeCardLayout from "../configurations/page-placecards.json";
import leatherLayout from "../configurations/page-leather.json";
import leatherPCSmallLayout from "../configurations/page-leather-placecard-small.json";
import leatherPCC8 from "../configurations/page-leather-3.5x1.8511.json";

export const getLayout = (type) => {
	switch (type) {
		case "leather":
			return leatherLayout;
		case "leather-placecard-small":
			return leatherPCSmallLayout;
		case "leather-c8":
			return leatherPCC8;
		default:
			return placeCardLayout;
	}
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
