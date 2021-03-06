import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserI } from './../../../shared/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userFire$: Observable<User>;
  private filePath: string;

  constructor(private afAuth: AngularFireAuth, private storage: AngularFireStorage) {
    this.userFire$ = afAuth.authState;
  }

  LoginByAnonymous() {
    return this.afAuth.auth.signInAnonymously();
  }

  LoginByGoogle() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  loginByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  registerByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  saveUserProfileAndUploadImg(user: UserI, image: File) {
    if (image) {
      this.uploadImage(user, image);
    } else {
      this.saveUserProfile(user);
    }
  }

  private uploadImage(user: UserI, image: File) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          user.photoURL = urlImage;
          this.saveUserProfile(user);
        });
      })
    ).subscribe();
  }

  private saveUserProfile(user: UserI) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    }).then(() =>
      console.log('user updated!')
    ).catch(err =>
      console.log('Error', err)
    );

  }

}
