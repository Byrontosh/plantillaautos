import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myFormUser: FormGroup;
  constructor(private serviceAuth : FirebaseauthService,
              private router:Router) { }

  ngOnInit(): void {
    this.myFormUser = new FormGroup({
      usuarioF: new FormControl(''),
      passwordF: new FormControl('')
    });
  }

  registerUser(){
    let {usuarioF,passwordF} = this.myFormUser.value;
    this.serviceAuth.register(usuarioF,passwordF);
    this.router.navigate(['/login'])
}
}
