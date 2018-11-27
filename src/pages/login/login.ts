import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { AlunoProvider } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Global } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: '16/31644',
    password: '1234'
  };

  // Our translated text strings
  //private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public alunoProvider: AlunoProvider,
    public user: User,
    public global: Global,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

/*
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
*/
  }

  // Attempt to login in through our User service
  doLogin() {
/*
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
*/
    if(this.account.username==='Coordenador') {
      this.global.perfil = 'Coordenador';
      this.navCtrl.push(MainPage);
    } else {
      this.global.perfil = 'Aluno';
      this.alunoProvider.consultar(this.account.username).subscribe (aluno => {
        this.global.setAluno(aluno);
        this.navCtrl.push(MainPage);
      });
    }
  }

}
