import { View } from 'ui/core/view';
import { LayoutBase } from 'ui/layouts/layout-base';
export interface IScreenHeight {
    portrait: number;
    landscape: number;
}
export declare class SwissArmyKnife {
    android: any;
    ios: any;
    static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
    static getScreenHeight(): IScreenHeight;
}
