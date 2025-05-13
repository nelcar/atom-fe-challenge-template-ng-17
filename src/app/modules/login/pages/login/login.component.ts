import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
  this.auth.login(this.email).subscribe({
    next: () => this.router.navigate(['/home']),
    error: () => console.log('Login cancelado o fallido')
  });
}
}
