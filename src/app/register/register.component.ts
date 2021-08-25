import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public showLengthMessage: boolean = false;
  public showMatchMessage: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
      this.registerForm = this.formBuilder.group(
        {email: [''], password: [''], password2: ['']}
      );
    }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((e) => {
      if(e.password.length < 8) {
        this.showLengthMessage = true;
      } else {
        this.showLengthMessage = false;
      };
      if(e.password != e.password2) {
        this.showMatchMessage =true;
      } else {
        this.showMatchMessage = false;
      }
    })
  }

  async onClickRegister() {
    if(this.showLengthMessage == false 
      && this.showMatchMessage == false
      && this.registerForm.value.email != ''
      && this.registerForm.value.password != '') {
        // console.log(this.registerForm.value.email)  
        const token = await this.authService.register(this.registerForm.value)
        localStorage.setItem('jwt', token)
        // console.log(token)

    } else {
      alert('Invalid credentials')
    }
  };
}
