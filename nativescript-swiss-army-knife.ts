import {View, AddChildFromBuilder} from 'ui/core/view';
import {LayoutBase} from 'ui/layouts/layout-base';
import {StackLayout} from 'ui/layouts/stack-layout';
import {Color} from 'color';
import * as Platform from 'platform';

export interface IScreenHeight {
	portrait: number;
	landscape: number;
}

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

	/**
	 * returns an IScreenHeight ojecjt with the protrait demension and landscape deminsions */
	public static getScreenHeight(): IScreenHeight {
		let height1 = Platform.screen.mainScreen.heightDIPs;
		let height2 = Platform.screen.mainScreen.widthDIPs;
		return {
			portrait: height1,
			landscape: height2
		};
	}
}