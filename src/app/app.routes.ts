import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
{ path: 'register', component : MainComponent },
{ path: '**',
    redirectTo : 'register'
}
];
