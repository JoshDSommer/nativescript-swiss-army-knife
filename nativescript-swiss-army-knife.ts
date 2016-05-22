import {View, AddChildFromBuilder} from 'ui/core/view';
import {LayoutBase} from 'ui/layouts/layout-base';
import {StackLayout} from 'ui/layouts/stack-layout';
import {Color} from 'color';

export class SwissArmyKnife {

	get android(): any {
		return;
	}

	get ios(): any {
		return;
	}

	/**
	 * Takes a layout and removes all the child Views and returns them in an Array<View>
	 */
	public static pluckChildViewsFromLayout(parent: LayoutBase): Array<View> {
		let returnViews: View[] = [];
		parent.eachLayoutChild((child: View) => {
			returnViews.push(child);
		});
		parent.removeChildren();
		return returnViews;
	}
}