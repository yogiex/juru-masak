import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// library material ui
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table';


// modul component
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DataListComponent } from './data-list/data-list.component'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule // modul request api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
