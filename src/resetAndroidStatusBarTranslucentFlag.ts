import { device, isAndroid } from "tns-core-modules/platform";
/**
 * Clears the Android Translucent StatusBar flag
 */
export function resetAndroidStatusBarTranslucentFlag(): void {
	if (isAndroid && device.sdkVersion >= "19") {
		const window = this._androidActivity.getWindow();
		const LayoutParams = <any>android.view.WindowManager.LayoutParams;
		window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
	}
}
