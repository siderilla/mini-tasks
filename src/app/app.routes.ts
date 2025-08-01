import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'manage', component: TaskFormComponent}
];
