import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from "@angular/common";
import zh from '@angular/common/locales/zh';
registerLocaleData(zh, 'zh');

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {OverlayModule} from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
