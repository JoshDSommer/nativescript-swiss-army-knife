import { device, isAndroid } from "tns-core-modules/platform";
/**
 * Sets the Android navigation bar to translucent
 * Android API >= 19 only
 */
export function setAndroidNavBarTranslucentFlag(): void {
	if (isAndroid && device.sdkVersion >= "19") {
		const window = this._androidActivity.getWindow();
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		window.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
	}
}
