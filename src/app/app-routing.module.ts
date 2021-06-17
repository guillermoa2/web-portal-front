import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";


const appRoutes: Routes = [
    {path: 'sign-in', component: SignInComponent},
    {path: 'register', component: RegisterComponent},

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