import { Font } from "@react-pdf/renderer";

import Alexandria from "../fonts/Alexandria.ttf";
import Apashy from "../fonts/Apashy.ttf";
import Bender from "../fonts/Bender.ttf";
import BickhamScript from "../fonts/BickhamScript.otf";
import Champagne from "../fonts/ChampagneLimousines.ttf";
import EdwardianScript from "../fonts/EdwardianScript.ttf";
import FreestyleScript from "../fonts/FreestyleScript.ttf";
import GreatVibes from "../fonts/GreatVibes.ttf";
import HelloHoney from "../fonts/HelloHoney.otf";
import Kaitlyn from "../fonts/Kaitlyn.ttf";
import MonotypeCorsiva from "../fonts/MonotypeCorsiva.ttf";
import Monterey from "../fonts/Monterey.ttf";
import Perfetto from "../fonts/Perfetto.ttf";
import Southland from "../fonts/Southland.ttf";
import StrongFarmhouse from "../fonts/StrongFarmhouse.ttf";
import Times from "../fonts/times.ttf";
import TrajanPro from "../fonts/TrajanProRegular.ttf";

export const registerFonts = () => {
	Font.register({
		family: "Alexandria",
		src: Alexandria,
	});
	Font.register({
		family: "Apashy",
		src: Apashy,
	});
	Font.register({
		family: "Bender",
		src: Bender,
	});
	Font.register({
		family: "BickhamScript",
		src: BickhamScript,
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
		family: "FreestyleScript",
		src: FreestyleScript,
	});
	Font.register({
		family: "GreatVibes",
		src: GreatVibes,
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
	Font.register({
		family: "StrongFarmhouse",
		src: StrongFarmhouse,
	});
	Font.register({
		family: "TrajanPro",
		src: TrajanPro,
	});
	Font.register({
		family: "Times",
		src: Times,
	});
};
