import { Router } from '@angular/router';
import { UserI } from './../../../shared/models/user.interface';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() { }

  onLogin(form: UserI) {
    this.authService.loginByEmail(form).then(res => {
      console.log('Successfully', res);
      this.router.navigate(['/']);
    }).catch(err => console.log('Error', err));
  }
}
