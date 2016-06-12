import { EventData } from "data/observable";
import { Page } from "ui/page";
import {Label} from 'ui/label';
import { SwissArmyKnife} from 'nativescript-swiss-army-knife/nativescript-swiss-army-knife';
import * as app from 'application';
declare var android;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.actionBarHidden = true;
    let info1 = <Label>page.getViewById('info1');

    SwissArmyKnife.setAndroidNavBarTranslucentFlag();


    page.style.paddingTop = SwissArmyKnife.getScreenHeight().androidStatusBar;
}