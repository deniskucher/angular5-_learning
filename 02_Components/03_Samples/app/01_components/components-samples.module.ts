import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    BookComponent,
    ChapterComponent,
    CounterComponent,
    CounterHostComponent,
    TimerComponent,
    TimerHostComponent,
    NameCardComponent,
    NameCardHostComponent,
    MessageBoxComponent,
    MessageBoxHostComponent,
    MyTableComponent,
    MyTableHostComponent
} from "./index";

@NgModule({
    imports: [CommonModule],
    declarations: [
        BookComponent,
        ChapterComponent,
        CounterComponent,
        CounterHostComponent,
        TimerComponent,
        TimerHostComponent,
        NameCardComponent,
        NameCardHostComponent,
        MessageBoxComponent,
        MessageBoxHostComponent,
        MyTableComponent,
        MyTableHostComponent
    ]
})
export class ComponentsSampleModule {

}