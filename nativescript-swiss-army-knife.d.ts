import { View } from 'ui/core/view';
import { LayoutBase } from 'ui/layouts/layout-base';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Color } from 'color';
export declare class SwissArmyKnife {
    android: any;
    ios: any;
    static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
    static addFauxBottomRow(element: View, translateY: number, color: string | Color, height?: number, width?: number): StackLayout;
    static addFauxBottomDropShadow(element: View, translateY: number, width: number): StackLayout;
    private static bottomRow(opacity, width, height, color);
}
