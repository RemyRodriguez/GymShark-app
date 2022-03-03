import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoversCarouselComponent } from './covers.carousel.component';
import { FooterComponent } from './Footer/footer.component';

import { TopNavbarComponent } from './Header/topnavbar.component';
import { PhotoCardComponent } from './StockPhoto/photo.card.component';
import { CategoryCardComponent } from './Store/category.card.component';
import { AppRoutingModule } from './app-routing.module';
import { AllProductsLayoutComponent } from './Store/All-Products-layout.component';
import { HomeLayoutComponent } from './Store/home-layout.component';
import { BottomsLeggingsLayout } from './Store/bottoms-leggings-layout.component';
import { MainLayout } from './Store/Main-layout.component';
import { CropTopComponent } from './Store/crop-top-layout.component';
import { HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component'

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    PhotoCardComponent,
    CoversCarouselComponent,
    AllProductsLayoutComponent,
    HomeLayoutComponent,
    BottomsLeggingsLayout,
    MainLayout,
    CropTopComponent,
    UserInfoComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
