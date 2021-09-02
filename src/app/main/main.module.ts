import { NgModule } from '@angular/core';
import { DocumentsComponent } from './main/documents/documents.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { MainComponent } from './main/main.component';

import { MainRoutingModule } from './main-routing.module';
import { BoardsComponent } from './main/boards/boards.component';
import { CommitteesComponent } from './main/committees/committees.component';
import { MeetingsComponent } from './main/meetings/meetings.component';
import { MembersComponent } from './main/members/members.component';



@NgModule({
  declarations: [
    MainComponent,
    DocumentsComponent,
    BoardsComponent,
    CommitteesComponent,
    MeetingsComponent,
    MembersComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MainRoutingModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
