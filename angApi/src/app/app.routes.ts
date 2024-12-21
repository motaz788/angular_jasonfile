import { Routes } from '@angular/router';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:' ', component: AppComponent},
    {path:'trip/:id',component:TripDetailsComponent}
];
