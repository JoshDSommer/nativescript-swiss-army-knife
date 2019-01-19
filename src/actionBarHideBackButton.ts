import { topmost } from "tns-core-modules/ui/frame";
/** ActionBar Utilities */
/**
 * Programmatically hide the back button from the ActionBar
 */
export function actionBarHideBackButton() {
	if (topmost().ios) {
		topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(
			true,
			false
		);
	}
}
