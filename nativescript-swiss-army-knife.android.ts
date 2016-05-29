import {SwissArmyKnife as SwissArmyKnifeCommon} from './nativescript-swiss-army-knife.common';
import * as app from "application";
import * as Platform from 'platform';

declare var android: any;
let LayoutParams = android.view.WindowManager.LayoutParams;


export class SwissArmyKnife extends SwissArmyKnifeCommon {

    /**
	 * Sets the Android statusbar to translucent
     * Android API >= 19 only
	 */
    public static setAndroidStatusBarTranslucentFlag(): void {
        if (app.android && Platform.device.sdkVersion >= '19') {
            let window = app.android.startActivity.getWindow();
            window.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    }

    /**
     * Clears the Android Translucent StatusBar flag
     */
    public resetAndroidStatusBarTranslucentFlag(): void {
        if (app.android && Platform.device.sdkVersion >= '19') {
            let window = app.android.startActivity.getWindow();
            window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    }


    /**
    * Sets the Android navigation bar to translucent
    * Android API >= 19 only
    */
    public static setAndroidNavBarTranslucentFlag(): void {
        if (app.android && Platform.device.sdkVersion >= '19') {
            let window = app.android.startActivity.getWindow();
            window.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    }

    /**
     * Clears the Android Translucent NavigationBar flag
     */
    public resetAndroidNavBarTranslucentFlag(): void {
        if (app.android && Platform.device.sdkVersion >= '19') {
            let window = app.android.startActivity.getWindow();
            window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    }

}