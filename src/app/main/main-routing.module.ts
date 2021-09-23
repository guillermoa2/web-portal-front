import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../error-page/error-page.component";

import { BoardsComponent } from "./main/boards/boards.component";
import { CommitteesComponent } from "./main/committees/committees.component";
import { DocumentsComponent } from "./main/documents/documents.component";
import { MainComponent } from "./main/main.component";
import { MeetingsComponent } from "./main/meetings/meetings.component";
import { MembersComponent } from "./main/members/members.component";

const mainRoutes: Routes = [
    {path: '', component: MainComponent, children: [
        {path: 'boards', component: BoardsComponent},
        {path: 'committees', component: CommitteesComponent},
        {path: 'meetings', component: MeetingsComponent},
        {path: 'documents', component: DocumentsComponent},
        {path: 'members', component: MembersComponent},
        {path: 'main', redirectTo: ''},
        {path: '**', redirectTo: ''},
        // {path: '**', component: ErrorPageComponent},

    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [RouterModule]
})

export class MainRoutingModule {

}