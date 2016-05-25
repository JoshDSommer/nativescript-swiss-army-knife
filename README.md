# nativescript-swiss-army-knife

A repo for all those functions you copy and paste between projects.

#Common Functions
**`pluckChildViewsFromLayout`** accepts any layout and removes all it's child views and returns them in an array.

**`getScreenHeight`**  returns an object of type IScreenHeight with the properties `portrait` and `landscape` dimensions.

* ActionBar Utilities

**`actionBarSetTitle`** Programmatically set title on ActionBar

**`actionBarAddButton`** Programmatically add button to the ActionBar

**`actionBarClearButtons`** Programmatically remove all buttons from the ActionBar

#Android specific functions
**`setAndroidStatusBarTranslucentFlag`** sets the Android statusbar to translucent [Android Documentation](https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_STATUS)

**`resetAndroidStatusBarTranslucentFlag`** resets the Translucent Android statusbar flag.

**`setAndroidNavBarTranslucentFlag`** sets the Android navigation bar to translucent [Android Documentaion](https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_NAVIGATION)

**`resetAndroidNavBarTranslucentFlag`** resets the Translucent Android navigation bar flag.

#iOS specific functions

**`actionBarHideBackButton`** Programmatically hide the back button from the ActionBar

**`actionBarSetStatusBarStyle`** Programmatically remove all buttons from the ActionBar

###Plugin Development Work Flow:

* Clone repository to your machine.
* Run `npm run setup` to prepare the demo project
* Build with `npm run build`
* Run and deploy to your device or emulator with `npm run demo.android` or `npm run demo.ios`

##Contributing guidelines
[Contributing guidelines](https://github.com/TheOriginalJosh/nativescript-swiss-army-knife/blob/master/CONTRIBUTING.md)

[MIT](/LICENSE)

for {N} version 2.0.0+
