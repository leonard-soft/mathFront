import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DefaultComponent } from './default/default.component';
import { NewAverageComponent } from './new-average/new-average.component';
import { ThemesComponent } from './themes/themes.component';
import { MyAveragesComponent } from './my-averages/my-averages.component';
import { SaveUserDataComponent } from './save-user-data/save-user-data.component';

export const routes: Routes = [
    {path:'', component: DefaultComponent},
    {path:'login', component: LoginComponent},
    {path:'userRegistration', component: UserRegistrationComponent},
    {path:'index', component: DasboardComponent},
    {path:'newAverage', component: NewAverageComponent},
    {path:'themes', component: ThemesComponent},
    {path:'myAverage', component: MyAveragesComponent},
    {path:'saveUserData', component: SaveUserDataComponent}
];
