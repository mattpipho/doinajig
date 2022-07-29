import { Font } from "@react-pdf/renderer";

import Champagne from "../fonts/ChampagneLimousines.ttf";
import Monterey from "../fonts/Monterey.ttf";
import EdwardianScript from "../fonts/EdwardianScript.ttf";
import Perfetto from "../fonts/Perfetto.ttf";
import MonotypeCorsiva from "../fonts/MonotypeCorsiva.ttf";
import HelloHoney from "../fonts/HelloHoney.otf";
import Southland from "../fonts/Southland.ttf";

export const registerFonts = () => {
	Font.register({
		family: "ChampagneLimousines",
		src: Champagne,
	});
	Font.register({
		family: "Monterey",
		src: Monterey,
	});
	Font.register({
		family: "EdwardianScript",
		src: EdwardianScript,
	});
	Font.register({
		family: "Perfetto",
		src: Perfetto,
	});
	Font.register({
		family: "MonotypeCorsiva",
		src: MonotypeCorsiva,
	});
	Font.register({
		family: "HelloHoney",
		src: HelloHoney,
	});
	Font.register({
		family: "Southland",
		src: Southland,
	});
};
