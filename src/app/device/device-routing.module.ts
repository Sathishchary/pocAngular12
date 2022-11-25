import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/device', pathMatch:'prefix'},
  { path: 'device', component: DeviceComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
