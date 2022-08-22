import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo:'desktop'},
  {path: 'desktop', loadChildren: () => import('./desktop/desktop.module').then(m => m.DesktopModule)},
  {path: 'connector', loadChildren: () => import('./connector/connector.module').then(m => m.ConnectorModule)},
  {path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
  {path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
  {path: 'plugin', loadChildren: () => import('./plugin/plugin.module').then(m => m.PluginModule)},
  {path: 'install', loadChildren: () => import('./install/install.module').then(m => m.InstallModule)},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
