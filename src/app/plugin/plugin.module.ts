import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin/plugin.component';
import { PluginEditComponent } from './plugin-edit/plugin-edit.component';



@NgModule({
  declarations: [
    PluginComponent,
    PluginEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PluginModule { }
