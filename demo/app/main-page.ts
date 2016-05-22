import { EventData } from "data/observable";
import { Page } from "ui/page";
import {Label} from 'ui/label';
import { HelloWorldModel } from "./main-view-model";
import { SwissArmyKnife} from 'nativescript-swiss-army-knife/nativescript-swiss-army-knife';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
    let info1 = <Label>page.getViewById('info1');
    let screenInfo = SwissArmyKnife.getScreenHeight();
    info1.text = `Portrait ${screenInfo.portrait} landscape ${screenInfo.landscape}`;
}