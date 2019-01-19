import { Color } from "tns-core-modules/color";
import { device, isAndroid } from "tns-core-modules/platform";
import { _androidActivity, _getBarColor } from "./functions";
/**
 * Sets the Android statusbar color, accepts either a string color or a Color object
 * Android API >= 21 only
 */
export function setAndroidStatusBarColor(color: string | Color): void {
	if (isAndroid && device.sdkVersion >= "21") {
		const barColor = _getBarColor(color);
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		let window: any;
		if (_androidActivity() != null) {
			window = _androidActivity().getWindow();
		} else {
			window = _androidActivity().getWindow();
		}
		window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
		window.setStatusBarColor(barColor.android);
	}
}
