import { Component, Input } from "@angular/core";

@Component({
    selector: 'gs-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})
export class CategoryCardComponent{
   @Input() img:string;
   @Input()  price: number;
   @Input() sku: string;
   @Input() description:string;

    constructor() {
        this.img = "";
        this.price= 0.00;
        this.sku = "XXXXXXXX";
        this.description = "Missing Description";
}
}