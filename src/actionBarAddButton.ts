import { ActionItem } from "tns-core-modules/ui/action-bar";
import { topmost } from "tns-core-modules/ui/frame";
/**
 * Programmatically add button to the ActionBar
 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
 */
export function actionBarAddButton(button: ActionItem) {
	topmost().currentPage.actionBar.actionItems.addItem(button);
}
