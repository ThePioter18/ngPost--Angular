import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/login/auth.service';
import { UserI } from './../../../shared/models/user.interface';
import { File } from './../../../shared/models/file.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public image: File;
  public avatarImage = 'https://picsum.photos/150/150';

  constructor(private authService: AuthService) { }

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    photoURL: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.authService.userFire$.subscribe(user => {
      this.initValuesForm(user);
    });
  }

  onSaveUser(user: UserI) {
    this.authService.saveUserProfileAndUploadImg(user, this.image);
  }

  private initValuesForm(user: UserI) {
    if (user.photoURL) {
      this.avatarImage = user.photoURL;
    }

    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email,
    });
  }

  handleImage(image: File) {
    this.image = image;
  }

}
