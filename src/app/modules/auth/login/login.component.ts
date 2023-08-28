import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/interfaces/user';

const user: User = {
  email: 'admin@gmail.com',
  password: '123456',
  name: 'Jhosimar'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.formBuilder.group({
    email: [user.email, [Validators.required]],
    password: [user.password, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ingresar() {
    if(!this.form.valid) return;
    const userInput: User = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      name: user.name
    }
    this.authService.login(userInput);
    this.router.navigateByUrl('/principal');
  }

}
