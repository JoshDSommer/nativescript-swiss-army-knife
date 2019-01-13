import { isAndroid, isIOS } from "tns-core-modules/platform";
import { ListView } from "tns-core-modules/ui/list-view";
export function getListViewVerticalOffset(view: ListView): number {
	if (isIOS && view.ios) {
		return view.ios.contentOffset.y;
	} else if (isAndroid && view.android) {
		return view.android.computeVerticalScrollOffset();
	}
	return null;
}
