/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import * as app from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";
import { device, isAndroid, isIOS, screen } from "tns-core-modules/platform";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import { View } from "tns-core-modules/ui/core/view";
import { topmost } from "tns-core-modules/ui/frame";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";

export interface IScreenHeight {
	portrait: number;
	landscape: number;
	androidStatusBar: number;
	androidNavBar: number;
}

export class SwissArmyKnife {
	get android(): any {
		return;
	}

	get ios(): any {
		return;
	}

	/**
	 * reutnrs the vertical offset of the listView on Android and iOS
	 */
	static listViewVerticalOffset(view: ListView): number {
		// no ui bounce. causes problems
		if (isIOS && view.ios) {
			return view.ios.contentOffset.y;
		} else if (isAndroid && view.android) {
			return view.android.computeVerticalScrollOffset();
		}
		return null;
	}

	/**
	 * Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
	 */
	static disableScrollBounce(view: ScrollView | ListView): void {
		// no ui bounce. causes problems
		if (isIOS) {
			view.ios.bounces = false;
		} else if (isAndroid && view.android != null) {
			view.android.setOverScrollMode(2);
		}
	}

	/**
	 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
	 */
	static removeHorizontalScrollBars(view: ScrollView | ListView): void {
		if (isIOS) {
			view.ios.showsHorizontalScrollIndicator = false;
		} else {
			view.android.setHorizontalScrollBarEnabled(false);
		}
	}

	/**
	 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
	 */
	static removeVerticalScrollBars(view: ScrollView | ListView): void {
		if (isIOS) {
			view.ios.showsVerticalScrollIndicator = false;
		} else {
			view.android.setVerticalScrollBarEnabled(false);
		}
	}

	/**
	 * Takes a layout and removes all the child Views and returns them in an Array<View>
	 */
	static pluckChildViewsFromLayout(parent: LayoutBase): Array<View> {
		const returnViews: View[] = [];
		parent.eachLayoutChild((child: View) => {
			returnViews.push(child);
		});
		parent.removeChildren();
		return returnViews;
	}

	/**
	 * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height
	 */
	static getScreenHeight(): IScreenHeight {
		const height1 = screen.mainScreen.heightDIPs;
		const height2 = screen.mainScreen.widthDIPs;
		const statusbar = this._getStatusBarHeight();
		const navbar = this._getNavBarHeight();
		return {
			portrait: height1,
			landscape: height2,
			androidStatusBar: statusbar,
			androidNavBar: navbar
		};
	}

	/** ActionBar Utilities */
	/**
	 * Programmatically set title
	 */
	static actionBarSetTitle(title: string) {
		const actionBar = topmost().currentPage.actionBar;
		actionBar.title = title;
	}

	/**
	 * Programmatically add button to the ActionBar
	 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
	 */
	static actionBarAddButton(button: ActionItem) {
		topmost().currentPage.actionBar.actionItems.addItem(button);
	}

	/**
	 * Programmatically remove all buttons from the ActionBar
	 */
	static actionBarClearButtons() {
		const actionBar = topmost().currentPage.actionBar;
		const actionItems = actionBar.actionItems.getItems();
		actionItems.forEach(item => {
			actionBar.actionItems.removeItem(item);
		});
	}
	/**
	 * Sets the Android statusbar to translucent
	 * Android API >= 19 only
	 */
	static setAndroidStatusBarTranslucentFlag(): void {
		if (isAndroid && device.sdkVersion >= "19") {
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;
			const window = this._androidActivity.getWindow();
			// check for status bar
			window.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
		}
	}

	/**
	 * Clears the Android Translucent StatusBar flag
	 */
	static resetAndroidStatusBarTranslucentFlag(): void {
		if (isAndroid && device.sdkVersion >= "19") {
			const window = this._androidActivity.getWindow();
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;

			window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
		}
	}

	/**
	 * Sets the Android navigation bar to translucent
	 * Android API >= 19 only
	 */
	static setAndroidNavBarTranslucentFlag(): void {
		if (isAndroid && device.sdkVersion >= "19") {
			const window = this._androidActivity.getWindow();
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;
			window.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
		}
	}

	/**
	 * Clears the Android Translucent NavigationBar flag
	 */
	static resetAndroidNavBarTranslucentFlag(): void {
		if (isAndroid && device.sdkVersion >= "19") {
			const window = this._androidActivity.getWindow();
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;
			window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
		}
	}

	/**
	 * Sets the Android statusbar color, accepts either a string color or a Color object
	 * Android API >= 21 only
	 */
	static setAndroidStatusBarColor(color: string | Color): void {
		if (isAndroid && device.sdkVersion >= "21") {
			const barColor = this._getBarColor(color);
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;
			let window: any;
			if (this._androidActivity != null) {
				window = this._androidActivity.getWindow();
			} else {
				window = this._androidActivity.getWindow();
			}

			window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
			window.setStatusBarColor(barColor.android);
		}
	}

	/**
	 * Sets the Android NavigationBar color, accepts either a string color or a Color object
	 * Android API >= 21 only
	 */
	static setAndroidNavBarColor(color: string | Color): void {
		if (isAndroid && device.sdkVersion >= "21") {
			const barColor = this._getBarColor(color);
			const LayoutParams = <any>android.view.WindowManager.LayoutParams;
			let window: any;
			if (this._androidActivity != null) {
				window = this._androidActivity.getWindow();
			} else {
				window = this._androidActivity.getWindow();
			}

			window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
			window.setNavigationBarColor(barColor.android);
		}
	}

	/** ActionBar Utilities */
	/**
	 * Programmatically hide the back button from the ActionBar
	 */
	static actionBarHideBackButton() {
		if (topmost().ios) {
			topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(
				true,
				false
			);
		}
	}

	/**
	 * Programmatically remove all buttons from the ActionBar
	 */
	static actionBarSetStatusBarStyle(style: number) {
		if (topmost().ios) {
			const navigationBar = topmost().ios.controller.navigationBar;
			// 0: default
			// 1: light
			navigationBar.barStyle = style;
		}
	}

	static dismissSoftKeyboard() {
		if (isAndroid) {
			const inputManager = this._androidContext.getSystemService(
				android.content.Context.INPUT_METHOD_SERVICE
			);
			const currentFocus = this._androidActivity.getCurrentFocus() as android.view.View;
			if (currentFocus) {
				const windowToken = currentFocus.getWindowToken();
				if (windowToken) {
					inputManager.hideSoftInputFromWindow(
						windowToken,
						android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS
					);
				}
			}
		} else if (isIOS) {
			UIApplication.sharedApplication.sendActionToFromForEvent(
				"resignFirstResponder",
				null,
				null,
				null
			);
		}
	}

	private static _getStatusBarHeight(): number {
		if (isAndroid) {
			let result = 0;
			const resourceId = this._androidContext
				.getResources()
				.getIdentifier("status_bar_height", "dimen", "android");
			if (resourceId > 0) {
				result = this._androidContext
					.getResources()
					.getDimensionPixelSize(resourceId);
				result =
					result /
					this._androidContext.getResources().getDisplayMetrics().density;
			}
			return result;
		} else {
			return 0;
		}
	}

	private static _getBarColor(color: string | Color): Color {
		let barColor: Color;

		if (color instanceof Color === false) {
			barColor = new Color(<string>color);
		} else {
			barColor = <Color>color;
		}
		return barColor;
	}

	private static _getNavBarHeight(): number {
		if (isAndroid) {
			let result = 0;
			const resourceId = this._androidContext
				.getResources()
				.getIdentifier("navigation_bar_height", "dimen", "android");
			if (resourceId > 0) {
				result = this._androidContext
					.getResources()
					.getDimensionPixelSize(resourceId);
				result =
					result /
					this._androidContext.getResources().getDisplayMetrics().density;
			}
			return result;
		} else {
			return 0;
		}
	}

	private static get _androidContext() {
		return app.android.context || app.android.currentContext;
	}

	private static get _androidActivity() {
		return app.android.foregroundActivity || app.android.startActivity;
	}
}
