import { isAndroid, isIOS } from "tns-core-modules/platform";
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
export function disableScrollBounce(view: ScrollView | ListView): void {
	// no ui bounce. causes problems
	if (isIOS) {
		view.ios.bounces = false;
	} else if (isAndroid && view.android != null) {
		view.android.setOverScrollMode(2);
	}
}
