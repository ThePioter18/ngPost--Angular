import { Router } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { UserI } from './../../../shared/models/user.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  onRegister(form: UserI) {
    this.authService.registerByEmail(form).then(res => {
      console.log('Successfully', res);
      this.router.navigate(['/login']);
    }).catch(err => console.log('Error', err));
  }

  goToLogin() {
    this.router.navigate(['/login']);

  }
}
