import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainComponent,
    BrowserAnimationsModule
  ],
  exports : [
    MainComponent
  ]
})
export class LayoutModule { }
