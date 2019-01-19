import { topmost } from "tns-core-modules/ui/frame";
/**
 * Programmatically remove all buttons from the ActionBar
 */
export function actionBarClearButtons() {
	const actionBar = topmost().currentPage.actionBar;
	const actionItems = actionBar.actionItems.getItems();
	actionItems.forEach(item => {
		actionBar.actionItems.removeItem(item);
	});
}
