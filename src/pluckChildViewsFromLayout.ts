import { View } from "tns-core-modules/ui/core/view";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
/**
 * Takes a layout and removes all the child Views and returns them in an Array<View>
 */
export function pluckChildViewsFromLayout(parent: LayoutBase): Array<View> {
	const returnViews: View[] = [];
	parent.eachLayoutChild((child: View) => {
		returnViews.push(child);
	});
	parent.removeChildren();
	return returnViews;
}
