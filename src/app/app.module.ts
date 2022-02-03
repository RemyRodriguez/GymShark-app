import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';

import { TopNavbarComponent } from './Header/topnavbar.component';
import { PhotoCardComponent } from './StockPhoto/photo.card.component';
import { CategoryCardComponent } from './Store/category.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    PhotoCardComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
