import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth = inject(Auth);

  credentials = {
    email: '',
    password: ''
  };

  showAlert = signal(false);
  alertMsg = signal('Please wait! Logging in...');
  alertColor = signal('blue');
  inSubmission = signal(false);

  async login() {
    this.showAlert.set(true);
    this.alertMsg.set('Please wait! Logging in...');
    this.alertColor.set('blue');
    this.inSubmission.set(true);

    try {
      await signInWithEmailAndPassword(this.auth, this.credentials.email, this.credentials.password);
    } catch (e) {
      this.inSubmission.set(false);
      this.alertMsg.set('An unexpected error occurred. Please try again later.');
      this.alertColor.set('red');

      return;
    }

    this.alertMsg.set('Success! You are now logged in.');
    this.alertColor.set('green');
  }
}
