import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo:'desktop'},
  {path: 'desktop', loadChildren: () => import('./desktop/desktop.module').then(m => m.DesktopModule)},
  {path: 'link', loadChildren: () => import('./link/link.module').then(m => m.LinkModule)},
  {path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
  {path: 'plugin', loadChildren: () => import('./plugin/plugin.module').then(m => m.PluginModule)},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
