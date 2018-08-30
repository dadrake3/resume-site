import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatDividerModule,
  MatButtonModule,
  MatTabsModule,
  MatExpansionModule,
  MatCardModule,
  MatTreeModule,
  MatMenuModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSidenavModule
} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatMenuModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
