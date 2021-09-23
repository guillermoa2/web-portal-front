import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";


const appRoutes: Routes = [
    {path: 'sign-in', component: SignInComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'main',
        loadChildren: () => import('./main/main.module').then( m => m.MainModule)
    },
    // {path: '**', component: ErrorPageComponent},
    {path: '**', redirectTo: 'sign-in'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
