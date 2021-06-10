import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.loginForm = this.formBuilder.group(
      {email: [''], password: ['']}
    );
    }

  ngOnInit(): void {
  }

  async onClickLogin() {
    const token = await this.authService.login()
    console.log(token)
  }

}