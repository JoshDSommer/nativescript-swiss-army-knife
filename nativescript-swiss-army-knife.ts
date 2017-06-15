import * as app from "application";
import { View, AddChildFromBuilder } from "ui/core/view";
import { LayoutBase } from "ui/layouts/layout-base";
import { StackLayout } from "ui/layouts/stack-layout";
import { topmost } from "ui/frame";
import { ScrollView, ScrollEventData } from "ui/scroll-view";
import { ListView } from "ui/list-view";
import { ActionItem, ActionItems } from "ui/action-bar";
import { Color } from "color";
import * as Platform from "platform";

declare const android: any;

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
	 *Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
		*  */
  public static disableScrollBounce(view: ScrollView | ListView): void {
    //no ui bounce. causes problems
    if (app.ios) {
      view.ios.bounces = false;
    } else if (app.android && view.android != null) {
      view.android.setOverScrollMode(2);
    }
  }

  /**
	 *Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
	*  */
  public static removeHorizontalScrollBars(view: ScrollView | ListView): void {
    if (app.ios) {
      view.ios.showsHorizontalScrollIndicator = false;
    } else {
      view.android.setHorizontalScrollBarEnabled(false);
    }
  }

  /**
	 *Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
	*  */
  public static removeVerticalScrollBars(view: ScrollView | ListView): void {
    if (app.ios) {
      view.ios.showsVerticalScrollIndicator = false;
    } else {
      view.android.setVerticalScrollBarEnabled(false);
    }
  }

  /**
	 * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height*/
  public static getScreenHeight(): IScreenHeight {
    let height1 = Platform.screen.mainScreen.heightDIPs;
    let height2 = Platform.screen.mainScreen.widthDIPs;
    let statusbar = this.getStatusBarHeight();
    let navbar = this.getNavBarHeight();
    return {
      portrait: height1,
      landscape: height2,
      androidStatusBar: statusbar,
      androidNavBar: navbar
    };
  }

  private static getStatusBarHeight(): number {
    if (app.android) {
      let result = 0;
      let resourceId = app.android.currentContext
        .getResources()
        .getIdentifier("status_bar_height", "dimen", "android");
      if (resourceId > 0) {
        result = app.android.currentContext
          .getResources()
          .getDimensionPixelSize(resourceId);
        result =
          result /
          app.android.currentContext.getResources().getDisplayMetrics().density;
      }
      return result;
    } else {
      return 0;
    }
  }

  private static getNavBarHeight(): number {
    if (app.android) {
      let result = 0;
      let resourceId = app.android.currentContext
        .getResources()
        .getIdentifier("navigation_bar_height", "dimen", "android");
      if (resourceId > 0) {
        result = app.android.currentContext
          .getResources()
          .getDimensionPixelSize(resourceId);
        result =
          result /
          app.android.currentContext.getResources().getDisplayMetrics().density;
      }
      return result;
    } else {
      return 0;
    }
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
    actionItems.forEach(item => {
      actionBar.actionItems.removeItem(item);
    });
  }
  /**
     * Sets the Android statusbar to translucent
     * Android API >= 19 only
     */
  public static setAndroidStatusBarTranslucentFlag(): void {
    if (app.android && Platform.device.sdkVersion >= "19") {
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;
      let window = app.android.startActivity.getWindow();
      // check for status bar
      window.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
    }
  }

  /**
     * Sets the Android statusbar color, accepts either a string color or a Color object
     * Android API >= 21 only
     */
  public static setAndroidStatusBarColor(color: string | Color): void {
    if (app.android && Platform.device.sdkVersion >= "21") {
      let barColor = this.getBarColor(color);
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;
      let window: any;
      if (app.android.foregroundActivity != null) {
        window = app.android.foregroundActivity.getWindow();
      } else {
        window = app.android.startActivity.getWindow();
      }

      window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
      window.setStatusBarColor(barColor.android);
    }
  }

  /**
		 * Sets the Android NavigationBar color, accepts either a string color or a Color object
		 * Android API >= 21 only
		 */
  public static setAndroidNavBarColor(color: string | Color): void {
    if (app.android && Platform.device.sdkVersion >= "21") {
      let barColor = this.getBarColor(color);
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;
      let window: any;
      if (app.android.foregroundActivity != null) {
        window = app.android.foregroundActivity.getWindow();
      } else {
        window = app.android.startActivity.getWindow();
      }

      window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
      window.setNavigationBarColor(barColor.android);
    }
  }

  private static getBarColor(color: string | Color): Color {
    let barColor: Color;

    if (color instanceof Color === false) {
      barColor = new Color(<string>color);
    } else {
      barColor = <Color>color;
    }
    return barColor;
  }

  /**
     * Clears the Android Translucent StatusBar flag
     */
  public static resetAndroidStatusBarTranslucentFlag(): void {
    if (app.android && Platform.device.sdkVersion >= "19") {
      let window = app.android.startActivity.getWindow();
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;

      window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
    }
  }

  /**
    * Sets the Android navigation bar to translucent
    * Android API >= 19 only
    */
  public static setAndroidNavBarTranslucentFlag(): void {
    if (app.android && Platform.device.sdkVersion >= "19") {
      let window = app.android.startActivity.getWindow();
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;
      window.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
    }
  }

  /**
     * Clears the Android Translucent NavigationBar flag
     */
  public static resetAndroidNavBarTranslucentFlag(): void {
    if (app.android && Platform.device.sdkVersion >= "19") {
      let window = app.android.startActivity.getWindow();
      let LayoutParams = <any>android.view.WindowManager.LayoutParams;
      window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
    }
  }

  /** ActionBar Utilities */
  /**
	   * Programmatically hide the back button from the ActionBar
	   */
  public static actionBarHideBackButton() {
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
  public static actionBarSetStatusBarStyle(style: number) {
    if (topmost().ios) {
      let navigationBar = topmost().ios.controller.navigationBar;
      // 0: default
      // 1: light
      navigationBar.barStyle = style;
    }
  }
}
