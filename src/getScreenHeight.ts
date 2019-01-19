import { screen } from "tns-core-modules/platform";
import { IScreenHeight } from "./nativescript-swiss-army-knife";
import { _getNavBarHeight, _getStatusBarHeight } from "./functions";
/**
 * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height
 */
export function getScreenHeight(): IScreenHeight {
	const height1 = screen.mainScreen.heightDIPs;
	const height2 = screen.mainScreen.widthDIPs;
	const statusbar = _getStatusBarHeight();
	const navbar = _getNavBarHeight();
	return {
		portrait: height1,
		landscape: height2,
		androidStatusBar: statusbar,
		androidNavBar: navbar
	};
}
