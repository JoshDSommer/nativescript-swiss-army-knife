import { device, isAndroid } from "tns-core-modules/platform";
import { _androidActivity } from "./functions";
/**
 * Sets the Android statusbar to translucent
 * Android API >= 19 only
 */
export function setAndroidStatusBarTranslucentFlag(): void {
	if (isAndroid && device.sdkVersion >= "19") {
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		const window = _androidActivity().getWindow();
		// check for status bar
		window.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
	}
}
