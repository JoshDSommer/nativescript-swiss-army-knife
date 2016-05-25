import { View } from 'ui/core/view';
import { LayoutBase } from 'ui/layouts/layout-base';
import { ActionItem } from 'ui/action-bar';
export interface IScreenHeight {
    portrait: number;
    landscape: number;
}
export declare class SwissArmyKnife {
    android: any;
    ios: any;
    static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
    static getScreenHeight(): IScreenHeight;
    static actionBarSetTitle(title: string): void;
    static actionBarAddButton(button: ActionItem): void;
    static actionBarClearButtons(): void;
}
