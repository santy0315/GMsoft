import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}
