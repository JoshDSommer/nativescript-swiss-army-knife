import {SwissArmyKnife as SwissArmyKnifeCommon} from './nativescript-swiss-army-knife.common';
import {topmost} from 'ui/frame';

export class SwissArmyKnife extends SwissArmyKnifeCommon {

  /** ActionBar Utilities */  
  /**
	 * Programmatically hide the back button from the ActionBar
	 */
  public static actionBarHideBackButton() {
    if (topmost().ios) {
      topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
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