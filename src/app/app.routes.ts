import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: CvPageComponent },
];
