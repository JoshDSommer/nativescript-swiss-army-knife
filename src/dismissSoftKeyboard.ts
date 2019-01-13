import { isAndroid, isIOS } from "tns-core-modules/platform";
export function dismissSoftKeyboard() {
	if (isAndroid) {
		const inputManager = this._androidContext.getSystemService(
			android.content.Context.INPUT_METHOD_SERVICE
		);
		const currentFocus = this._androidActivity.getCurrentFocus() as android.view.View;
		if (currentFocus) {
			const windowToken = currentFocus.getWindowToken();
			if (windowToken) {
				inputManager.hideSoftInputFromWindow(
					windowToken,
					android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS
				);
			}
		}
	} else if (isIOS) {
		UIApplication.sharedApplication.sendActionToFromForEvent(
			"resignFirstResponder",
			null,
			null,
			null
		);
	}
}
