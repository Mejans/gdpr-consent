import fr from "./lang.fr";
import oc from "./lang.oc";
import en from "./lang.en";
import { getLanguage } from "../utils/lang";

export default {
	getCurrent: () => {
		switch (getLanguage()) {
			case "fr":
				return fr;
			case "oc":
				return oc;				
			default:
				return en;
		}
	}
};
