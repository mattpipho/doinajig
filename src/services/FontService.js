import { Font } from "@react-pdf/renderer";

import Bender from "../fonts/Bender.ttf";
import Champagne from "../fonts/ChampagneLimousines.ttf";
import EdwardianScript from "../fonts/EdwardianScript.ttf";
import HelloHoney from "../fonts/HelloHoney.otf";
import Kaitlyn from "../fonts/Kaitlyn.ttf";
import MonotypeCorsiva from "../fonts/MonotypeCorsiva.ttf";
import Monterey from "../fonts/Monterey.ttf";
import Perfetto from "../fonts/Perfetto.ttf";
import Southland from "../fonts/Southland.ttf";

export const registerFonts = () => {
	Font.register({
		family: "Bender",
		src: Bender,
	});
	Font.register({
		family: "ChampagneLimousines",
		src: Champagne,
	});
	Font.register({
		family: "EdwardianScript",
		src: EdwardianScript,
	});
	Font.register({
		family: "HelloHoney",
		src: HelloHoney,
	});
	Font.register({
		family: "Kaitlyn",
		src: Kaitlyn,
	});
	Font.register({
		family: "MonotypeCorsiva",
		src: MonotypeCorsiva,
	});
	Font.register({
		family: "Monterey",
		src: Monterey,
	});
	Font.register({
		family: "Perfetto",
		src: Perfetto,
	});
	Font.register({
		family: "Southland",
		src: Southland,
	});
};
