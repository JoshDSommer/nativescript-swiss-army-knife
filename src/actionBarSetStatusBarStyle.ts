import { topmost } from "tns-core-modules/ui/frame";
/**
 * Programmatically remove all buttons from the ActionBar
 */
export function actionBarSetStatusBarStyle(style: number) {
	if (topmost().ios) {
		const navigationBar = topmost().ios.controller.navigationBar;
		// 0: default
		// 1: light
		navigationBar.barStyle = style;
	}
}
