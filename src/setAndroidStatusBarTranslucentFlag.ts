import { device, isAndroid } from "tns-core-modules/platform";
/**
 * Sets the Android statusbar to translucent
 * Android API >= 19 only
 */
export function setAndroidStatusBarTranslucentFlag(): void {
	if (isAndroid && device.sdkVersion >= "19") {
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		const window = this._androidActivity.getWindow();
		// check for status bar
		window.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
	}
}
