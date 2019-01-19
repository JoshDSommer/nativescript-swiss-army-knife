import { isIOS } from "tns-core-modules/platform";
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
/**
 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeHorizontalScrollBars(view: ScrollView | ListView): void {
	if (isIOS) {
		view.ios.showsHorizontalScrollIndicator = false;
	} else {
		view.android.setHorizontalScrollBarEnabled(false);
	}
}
