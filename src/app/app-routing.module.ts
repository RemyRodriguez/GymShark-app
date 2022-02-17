import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { AllProductsLayoutComponent } from './Store/All-Products-layout.component';
import { HomeLayoutComponent } from './Store/home-layout.component';
import { BottomsLeggingsLayout } from './Store/bottoms-leggings-layout.component';
import { MainLayout } from './Store/Main-layout.component';
import { CropTopComponent } from './Store/crop-top-layout.component';



const routes:Routes  = [
  
  {
    path: 'crop-top', component: CropTopComponent
  },
  
  {
    path: 'bottoms-leggings', component: BottomsLeggingsLayout
  },
  
  {
    path: 'Main', component: MainLayout
  },

  {
    path: 'home', component: HomeLayoutComponent
  },
  {
     path: 'All-Products', component: AllProductsLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
  RouterModule
  ]
})
export class AppRoutingModule { }
