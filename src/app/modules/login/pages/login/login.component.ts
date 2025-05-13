import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const api = 'http://127.0.0.1:5001/atom-task-app/us-central1/api/users';

    this.http.get(`${api}/${this.email}`).subscribe({
      next: (user: any) => {
        localStorage.setItem('userId', user.id);
        this.router.navigate(['/home']);
      },
      error: () => {
        if (confirm('Usuario no encontrado. ¿Desea crearlo?')) {
          this.http.post(api, { email: this.email }).subscribe((user: any) => {
            localStorage.setItem('userId', user.id);
            this.router.navigate(['/home']);
          });
        }
      },
    });
  }
}
