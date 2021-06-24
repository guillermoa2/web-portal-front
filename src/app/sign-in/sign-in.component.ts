import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.loginForm = this.formBuilder.group(
      {email: [''], password: ['']}
    );
    }

  ngOnInit(): void {
  }

  async onClickLogin() {
    const input = await this.authService.login(this.loginForm.value)
    // console.log(token)
    // console.log(token == true)
    if (input.token) {
      this.router.navigate(['/main']);
      // console.log('hi')
    } else {
      alert('invalid')
    }
  }

}