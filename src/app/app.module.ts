import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowslistComponent } from './showslist/showslist.component';
import { ShowslistItemComponent } from './showslist-item/showslist-item.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowslistComponent,
    ShowslistItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
