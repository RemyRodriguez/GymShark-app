import { Component, OnInit } from '@angular/core';
import { CoversCarouselComponent } from 'src/app/covers.carousel.component';
import { AllProductsLayoutComponent } from 'src/app/Store/All-Products-layout.component';
import { FrontPage } from 'src/app/Store/FrontPage.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:FrontPage) { }

  ngOnInit(): void {
  }

  addProduct(product:FrontPage) {
    console.log("You pressed add product")
    console.log(product);
    this.ps.addProduct(product);
  }
}
