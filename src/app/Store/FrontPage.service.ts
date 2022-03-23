import { Injectable } from "@angular/core";
import { AllProductsLayoutComponent } from "./All-Products-layout.component";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class FrontPage{
      

    constructor(private db:AngularFireDatabase) {

    }

    public getFrontPage() {
        return this.db.list<FrontPage>("products").valueChanges();
    }

}