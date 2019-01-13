import { isIOS } from "tns-core-modules/platform";
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
/**
 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeVerticalScrollBars(view: ScrollView | ListView): void {
	if (isIOS) {
		view.ios.showsVerticalScrollIndicator = false;
	} else {
		view.android.setVerticalScrollBarEnabled(false);
	}
}
