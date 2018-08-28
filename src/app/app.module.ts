import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableControlsComponent } from './table-controls/table-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TableControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
