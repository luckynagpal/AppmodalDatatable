import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewComponent } from './new/new.component';
import {DataTableModule} from "angular-6-datatable";
@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    DataTableModule

  ],
  exports:[
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [NewComponent],
})
export class AppModule { }
