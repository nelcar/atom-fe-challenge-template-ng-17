import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../../core/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.loading = true;

    this.auth.login(this.email).subscribe({
      next: () => {
        this.snackBar.open('Sesión iniciada correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/tasks']);
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('Error al iniciar sesión', 'Cerrar', { duration: 3000 });
        this.loading = false;
      },
    });
  }
}
