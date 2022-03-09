import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AllProductsLayoutComponent } from "./All-Products-layout.component";

@Injectable({
    providedIn: 'root'
})
export class FrontPage{
      private baseUrl:string = 'https://gymshark-ae873-default-rtdb.firebaseio.com/';
      private FrontPageEndPoint:string = 'FrontPage.json';

    constructor(private http:HttpClient) {

    }

    public getFrontPage() {
        return this.http.get<AllProductsLayoutComponent []>(this.baseUrl + this.FrontPageEndPoint);
    }

}