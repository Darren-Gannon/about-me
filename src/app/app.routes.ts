import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cv', pathMatch: 'full' },
    { path: 'cv', component: CvPageComponent },
];
