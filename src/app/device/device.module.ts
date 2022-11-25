import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
    DeviceComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule
  ]
})
export class DeviceModule { }
