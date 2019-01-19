import { Color } from "tns-core-modules/color";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import { View } from "tns-core-modules/ui/core/view";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
export interface IScreenHeight {
	portrait: number;
	landscape: number;
	androidStatusBar: number;
	androidNavBar: number;
}
export declare class SwissArmyKnife {
	readonly android: any;
	readonly ios: any;
	static getListViewVerticalOffset(view: ListView): number;
	static disableScrollBounce(view: ScrollView | ListView): void;
	static removeHorizontalScrollBars(view: ScrollView | ListView): void;
	static removeVerticalScrollBars(view: ScrollView | ListView): void;
	static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
	static getScreenHeight(): IScreenHeight;
	static actionBarSetTitle(title: string): void;
	static actionBarAddButton(button: ActionItem): void;
	static actionBarClearButtons(): void;
	static setAndroidStatusBarTranslucentFlag(): void;
	static resetAndroidStatusBarTranslucentFlag(): void;
	static setAndroidNavBarTranslucentFlag(): void;
	static resetAndroidNavBarTranslucentFlag(): void;
	static setAndroidStatusBarColor(color: string | Color): void;
	static setAndroidNavBarColor(color: string | Color): void;
	static actionBarHideBackButton(): void;
	static actionBarSetStatusBarStyle(style: number): void;
	static dismissSoftKeyboard(): void;
	private static _getStatusBarHeight;
	private static _getBarColor;
	private static _getNavBarHeight;
	private static readonly _androidContext;
	private static readonly _androidActivity;
}
