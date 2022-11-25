import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { TopComponent } from './top/top.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftComponent,
    TopComponent,
    CardHeaderComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[    LeftComponent,
    TopComponent,
    CardHeaderComponent]
})
export class SharedModule { }
