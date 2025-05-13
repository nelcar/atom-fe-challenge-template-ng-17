import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { TasksComponent } from './modules/tasks/pages/tasks/tasks.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'Login' }
    },
    {
        path: 'tasks',
        canActivate: [authGuard],
        component: TasksComponent,
        data: { animation: 'Tasks' }
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
