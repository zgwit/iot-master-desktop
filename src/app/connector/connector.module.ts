import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunnelComponent } from './tunnel/tunnel.component';
import { ServerComponent } from './server/server.component';
import { TunnelDetailComponent } from './tunnel-detail/tunnel-detail.component';
import { TunnelEditComponent } from './tunnel-edit/tunnel-edit.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';



@NgModule({
  declarations: [
    TunnelComponent,
    ServerComponent,
    TunnelDetailComponent,
    TunnelEditComponent,
    ServerEditComponent,
    ServerDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConnectorModule { }
