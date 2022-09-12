import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';


@NgModule({
  declarations: [
    AdminheaderComponent,
    AdminfooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
   exports :[AdminheaderComponent,AdminfooterComponent]
})
export class SharedModule { }
