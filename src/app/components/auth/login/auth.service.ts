import { UserI } from './../../../shared/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userFire: User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(userData => {
      this.userFire = userData;
    });
  }

  loginByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
