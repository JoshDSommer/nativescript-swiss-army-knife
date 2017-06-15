import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "ui/frame";
import { ScrollView } from "ui/scroll-view";
import { SwissArmyKnife, IScreenHeight } from "nativescript-swiss-army-knife";

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value);
    }
  }

  public onTap() {
    SwissArmyKnife.actionBarSetTitle("New Title");
    this._counter--;
    this.updateMessage();
  }

  public removeScrollVerticalBars(args) {
    const scrollV = topmost().getViewById("scrollV") as ScrollView;
    SwissArmyKnife.removeVerticalScrollBars(scrollV);
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
      this.message = `${this._counter} taps left`;
    }
  }
}
