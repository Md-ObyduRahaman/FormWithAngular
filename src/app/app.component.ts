import { Component } from '@angular/core';
import { from } from 'rxjs';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapForm';
  onSubmit(data: any)
  {
    console.warn(data);
  }
  userData={
    email:"sojib@gmail.com",
    password: "123jiggf",
    address:"Mymensingh",
    mobile:"0178237837"
  }
}
