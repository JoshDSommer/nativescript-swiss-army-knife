import { Color } from "tns-core-modules/color";
import { device, isAndroid } from "tns-core-modules/platform";
/**
 * Sets the Android statusbar color, accepts either a string color or a Color object
 * Android API >= 21 only
 */
export function setAndroidStatusBarColor(color: string | Color): void {
	if (isAndroid && device.sdkVersion >= "21") {
		const barColor = this._getBarColor(color);
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		let window: any;
		if (this._androidActivity != null) {
			window = this._androidActivity.getWindow();
		} else {
			window = this._androidActivity.getWindow();
		}
		window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
		window.setStatusBarColor(barColor.android);
	}
}
