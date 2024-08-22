import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: '**', redirectTo: '/home' },  // Wildcard route to redirect to home
];
