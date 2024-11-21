import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

const component = [CardComponent];

@NgModule({
  declarations: [component],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [component],
})
export class SharedModule { }
