# nativescript-swiss-army-knife

[![npm](https://img.shields.io/npm/v/nativescript-swiss-army-knife.svg)](https://www.npmjs.com/package/nativescript-swiss-army-knife)
[![npm](https://img.shields.io/npm/dt/nativescript-swiss-army-knife.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-swiss-army-knife)


A repo for all those functions you copy and paste between projects.

#Common Functions
**`disableScrollBounce`** Disables bounce/overscroll for a ScrollView or ListView on Android and iOS.

**`removeHorizontalScrollBars`** Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS

**`removeVerticalScrollBars`** Hides vertical scrollbars for scrollViews or ListViews on Android and iOS

**`pluckChildViewsFromLayout`** accepts any layout and removes all it's child views and returns them in an array.

**`getScreenHeight`**  returns an object of type `IScreenHeight` with the properties `portrait` and `landscape` dimensions. `IScreenHeight` also has the properties `androidStatusBar` and `androidNavBar` which are  android specific properties that will return the Nav bar and Status bar heights as well. if accessed on iOS they will have a value of 0. These can come in handy since the `portrait` and `landscape` dimensions do not take these into account.

* ActionBar Utilities

**`actionBarSetTitle`** Programmatically set title on ActionBar

**`actionBarAddButton`** Programmatically add button to the ActionBar

**`actionBarClearButtons`** Programmatically remove all buttons from the ActionBar

#Android specific functions
**`setAndroidStatusBarTranslucentFlag`** sets the Android statusbar to translucent [Android Documentation](https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_STATUS)

**`resetAndroidStatusBarTranslucentFlag`** resets the Translucent Android statusbar flag.

**`setAndroidNavBarTranslucentFlag`** sets the Android navigation bar to translucent [Android Documentaion](https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_NAVIGATION)

**`resetAndroidNavBarTranslucentFlag`** resets the Translucent Android navigation bar flag.

**`setAndroidStatusBarColor`** Sets the Android navigation bar color, accepts either a string color or a Color object

**`setAndroidNavBarColor`** Sets the Android status bar color, accepts either a string color or a Color object

#iOS specific functions

**`actionBarHideBackButton`** Programmatically hide the back button from the ActionBar

**`actionBarSetStatusBarStyle`** Programmatically remove all buttons from the ActionBar

###Plugin Development Work Flow:

* Clone repository to your machine.
* Run `npm run setup` to prepare the demo project
* Build with `npm run build`
* Run and deploy to your device or emulator with `npm run demo.android` or `npm run demo.ios`

If you add a new function make sure to add it to `nativescript-swiss-army-knife.d.ts` as well.

### Thanks to these awesome contributors!

[Brad Martin](https://github.com/bradmartin)

[Nathan Walker](https://github.com/NathanWalker)

##Contributing guidelines
[Contributing guidelines](https://github.com/TheOriginalJosh/nativescript-swiss-army-knife/blob/master/CONTRIBUTING.md)

[MIT](/LICENSE)

for {N} version 2.0.0+
