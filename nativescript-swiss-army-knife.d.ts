import { View } from 'ui/core/view';
import { LayoutBase } from 'ui/layouts/layout-base';
import { ScrollView } from 'ui/scroll-view';
import { ListView } from 'ui/list-view';
import { ActionItem } from 'ui/action-bar';
import { Color } from 'color';
export interface IScreenHeight {
    portrait: number;
    landscape: number;
    androidStatusBar: number;
    androidNavBar: number;
}
export declare class SwissArmyKnife {
    android: any;
    ios: any;
    static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
    static disableScrollBounce(view: ScrollView | ListView): void;
    static removeHorizontalScrollBars(view: ScrollView | ListView): void;
    static removeVerticalScrollBars(view: ScrollView | ListView): void;
    static getScreenHeight(): IScreenHeight;
    private static getStatusBarHeight();
    private static getNavBarHeight();
    static actionBarSetTitle(title: string): void;
    static actionBarAddButton(button: ActionItem): void;
    static actionBarClearButtons(): void;
    static setAndroidStatusBarTranslucentFlag(): void;
    static setAndroidStatusBarColor(color: string | Color): void;
    static setAndroidNavBarColor(color: string | Color): void;
    private static getBarColor(color);
    static resetAndroidStatusBarTranslucentFlag(): void;
    static setAndroidNavBarTranslucentFlag(): void;
    static resetAndroidNavBarTranslucentFlag(): void;
    static actionBarHideBackButton(): void;
    static actionBarSetStatusBarStyle(style: number): void;
}
