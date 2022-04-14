import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticatioService } from './authentication.service';

@Component({
  selector: 'gs-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticatioService) { }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm) {
   console.log("Button clicked");
    console.log(data);

    this.auth.signup(data.value.email, data.value.password).subscribe(
      data => {
      console.log(data);
      }
      );
    data.reset();
  }
}
