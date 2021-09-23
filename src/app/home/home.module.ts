import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
