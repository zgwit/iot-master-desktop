import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserComponent,
    DetailComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
