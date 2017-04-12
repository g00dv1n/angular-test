import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FocusTableComponent } from './focus-table/focus-table.component';
import { AutofocusDirective } from './autofocus.directive';
import { CellComponent } from './focus-table/cell/cell.component';
import { HeaderCellComponent } from './focus-table/header-cell/header-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    FocusTableComponent,
    AutofocusDirective,
    CellComponent,
    HeaderCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
