import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AustraliaComponent } from './australia/australia.component';
import { IndiaComponent } from './india/india.component';
import { EnglandComponent } from './england/england.component';
import { AteamComponent } from './australia/ateam/ateam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyT1Component } from './australia/buy-t1/buy-t1.component';
import { Book1Component } from './australia/book1/book1.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { WalletComponent } from './wallet/wallet.component';





@NgModule({
  declarations: [
    AppComponent,
    AustraliaComponent,
    IndiaComponent,
    EnglandComponent,
    AteamComponent,
    BuyT1Component,
    Book1Component,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
