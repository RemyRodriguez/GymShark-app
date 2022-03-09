import { Component, OnInit } from "@angular/core";
import { FrontPage } from "./FrontPage.service";

@Component ({
    selector: 'gs-All-Products-layout',
    templateUrl: 'All-Products-layout.component.html'
})
export class AllProductsLayoutComponent implements OnInit{
    products: any;
    
    constructor(private service:FrontPage) {
         
        }

      
    ngOnInit(): void {
        console.log("Fetch data");
        this.service.getFrontPage().subscribe(data => {
            console.log(data);
            for (var FrontPage of data) {
                this.products.push(product);
            }
        });
    }

}

function product(product: any) {
    throw new Error("Function not implemented.");
}
