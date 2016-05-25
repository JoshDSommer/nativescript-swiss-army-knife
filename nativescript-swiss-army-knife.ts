import {View, AddChildFromBuilder} from 'ui/core/view';
import {LayoutBase} from 'ui/layouts/layout-base';
import {StackLayout} from 'ui/layouts/stack-layout';
import {topmost} from 'ui/frame';
import {ActionItem, ActionItems} from 'ui/action-bar';
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

	/** ActionBar Utilities */
	/**
	 * Programmatically set title
	 */
	public static actionBarSetTitle(title: string) {
    var actionBar = topmost().currentPage.actionBar;
    actionBar.title = title;
  }

	/**
	 * Programmatically add button to the ActionBar
	 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
	 */
  public static actionBarAddButton(button: ActionItem) {
    topmost().currentPage.actionBar.actionItems.addItem(button);
  }

	/**
	 * Programmatically remove all buttons from the ActionBar
	 */
	public static actionBarClearButtons() {
    var actionBar = topmost().currentPage.actionBar;
    var actionItems = actionBar.actionItems.getItems();
    actionItems.forEach((item) => {
      actionBar.actionItems.removeItem(item);
    });
  }
}