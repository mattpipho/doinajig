import placeCardLayout from "../configurations/page-placecards.json";
import leatherLayout from "../configurations/page-leather.json";

export const getLayout = (type) => {
	if (type === "leather") {
		return leatherLayout;
	}
	return placeCardLayout;
};
