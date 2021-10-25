import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-uppage',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css']
})
export class SignUppageComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
    }
  }
}
