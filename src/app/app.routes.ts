import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { TasksComponent } from './modules/tasks/pages/tasks/tasks.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'tasks',
        component: TasksComponent,
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
