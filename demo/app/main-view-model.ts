import { SwissArmyKnife } from "nativescript-swiss-army-knife";
import { Observable } from "tns-core-modules/data/observable";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import { ListView } from "tns-core-modules/ui/list-view/list-view";

export class HelloWorldModel extends Observable {
	private _colors = ["red", "blue", "green", "yellow", "orange"];
	private _numbers = [0, 1];
	private _strings = ["Wow 😏", "Boom 💥", "Spooky 👻", "🧟‍♂️ Dead"];

	months = [
		{ month: "January" },
		{ month: "February" },
		{ month: "March" },
		{ month: "April" },
		{ month: "May" },
		{ month: "June" },
		{ month: "July" },
		{ month: "August" },
		{ month: "September" },
		{ month: "October" },
		{ month: "November" },
		{ month: "December" },
		{ month: "January" },
		{ month: "February" },
		{ month: "March" },
		{ month: "April" },
		{ month: "May" },
		{ month: "June" },
		{ month: "July" },
		{ month: "August" },
		{ month: "September" },
		{ month: "October" },
		{ month: "November" },
		{ month: "December" },
		{ month: "January" },
		{ month: "February" },
		{ month: "March" },
		{ month: "April" },
		{ month: "May" },
		{ month: "June" },
		{ month: "July" },
		{ month: "August" },
		{ month: "September" },
		{ month: "October" },
		{ month: "November" },
		{ month: "December" }
	];

	constructor() {
		super();
	}

	public onActionTitleChange() {
		const randomString = this._strings[
			Math.floor(Math.random() * this._strings.length)
		];
		SwissArmyKnife.actionBarSetTitle(randomString);
	}

	public removeScrollVerticalBars(args) {
		const scrollV = topmost().getViewById("scrollV") as ScrollView;
		SwissArmyKnife.removeVerticalScrollBars(scrollV);
	}

	public onChangeStatusBar() {
		if (isAndroid) {
			// resetting translucent flag so this is clear it works to user
			SwissArmyKnife.resetAndroidStatusBarTranslucentFlag();
			const randomColor = this._colors[
				Math.floor(Math.random() * this._colors.length)
			];
			SwissArmyKnife.setAndroidStatusBarColor(randomColor);
		} else if (isIOS) {
			const randomStyle = this._numbers[
				Math.floor(Math.random() * this._numbers.length)
			];
			SwissArmyKnife.actionBarSetStatusBarStyle(randomStyle);
		}
	}

	public onGetOffSet() {
		const list = topmost().getViewById("demoList") as ListView;
		console.log(SwissArmyKnife.getlistViewVerticalOffset(list));
	}

	public onGetScreenHeight() {
		const result = SwissArmyKnife.getScreenHeight();
		console.log("screen height result", result);
		this.set("screenHeightData", JSON.stringify(result));
	}

	public onCloseKeyboard() {
		SwissArmyKnife.dismissSoftKeyboard();
	}

	public makeAndroidStatusTranslucent() {
		SwissArmyKnife.setAndroidStatusBarTranslucentFlag();
	}

	public resetAndroidStatBar() {
		SwissArmyKnife.resetAndroidStatusBarTranslucentFlag();
	}

	public makeNavTranslucent() {
		SwissArmyKnife.setAndroidNavBarTranslucentFlag();
	}

	public resetAndroidNavBar() {
		SwissArmyKnife.resetAndroidNavBarTranslucentFlag();
	}
}
