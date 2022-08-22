import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent,
    ProjectEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
