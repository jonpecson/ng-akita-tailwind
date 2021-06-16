import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CardsModule { }
