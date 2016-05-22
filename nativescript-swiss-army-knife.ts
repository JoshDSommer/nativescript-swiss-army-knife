import {View, AddChildFromBuilder} from 'ui/core/view';
import {LayoutBase} from 'ui/layouts/layout-base';
import {StackLayout} from 'ui/layouts/stack-layout';
import {Color} from 'color';

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
	 *Adds a row border bottom to the elment. returns the new wrapper layout of type StackLayout
	 *  */
	public static addFauxBottomRow(element: View, translateY: number, color: string | Color, height?: number, width?: number): StackLayout {
		const parent = element.parent;
		//removes it from it's parent
		element.parent._removeView(element);
		if (width == null) {
			width = element.width;
		}
		if (height == null) {
			height = 1;
		}
		let rowColor: Color;
		if (color == null) {
			rowColor = new Color('#000');
		}
		if ((color instanceof Color) === false) {
			rowColor = new Color(<string>color);
		}

		let viewWrapper = new StackLayout();
		viewWrapper.borderColor = new Color('pink');
		viewWrapper.borderWidth = 1;
		viewWrapper.height = element.height + height;
		viewWrapper.width = width;

		viewWrapper.addChild(element);
		viewWrapper.addChild(this.bottomRow(0.4, width, height, rowColor));

		parent._addView(viewWrapper);
		return viewWrapper;
	}

	/**
	 *Adds a faux drop shadow to the bottom of the elment. returns the new wrapper layout of type StackLayout
	 *  */
	public static addFauxBottomDropShadow(element: View, translateY: number, width: number): StackLayout {
		const parent = element.parent;
		//removes it from it's parent
		element.parent._removeView(element);

		let viewWrapper = new StackLayout();
		let shadowWrapper = new StackLayout();
		viewWrapper.borderColor = new Color('pink');
		viewWrapper.borderWidth = 1;

		viewWrapper.height = element.height + 3;
		viewWrapper.width = element.width;

		viewWrapper.addChild(element);
		viewWrapper.addChild(shadowWrapper);

		shadowWrapper.width = width;
		shadowWrapper.height = 3;
		shadowWrapper.translateY = translateY;
		shadowWrapper.addChild(this.bottomRow(0.4, width, 1, new Color('#000')));
		shadowWrapper.addChild(this.bottomRow(0.2, width, 1, new Color('#000')));
		shadowWrapper.addChild(this.bottomRow(0.05, width, 1, new Color('#000')));

		parent._addView(viewWrapper);

		return viewWrapper;
	}

	private static bottomRow(opacity: number, width: number, height: number, color: Color): StackLayout {
		let row = new StackLayout();

		row.backgroundColor = color;
		row.opacity = opacity;
		row.height = height;
		return row;
	}
}