import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';



@NgModule({
  declarations: [
    DeviceComponent,
    DeviceEditComponent,
    DeviceDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeviceModule { }
