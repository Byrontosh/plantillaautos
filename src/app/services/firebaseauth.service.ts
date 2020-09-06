import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(private afAuth:AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
    const { user } = await this.afAuth.signInWithEmailAndPassword(email,password);
      return user;
    }
   catch (error) {
    console.log(error);
  }

  }

  async register(email: string, password: string) {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email,password); 
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}



