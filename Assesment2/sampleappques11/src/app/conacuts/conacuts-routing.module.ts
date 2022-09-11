import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConactusComponent } from '../conactus/conactus.component';

const routes: Routes = [
  {path:'',component:ConactusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConacutsRoutingModule { }
