import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class LoginPage {
  
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AngularFireAuth) {
  }

  async login(user: User){
    try{
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result){
        this.navCtrl.push("ProfilePage");
      }
      else{
        
      }
    }
    catch(e){
      console.log(e);
    }
  }

  goToRegister(){
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
