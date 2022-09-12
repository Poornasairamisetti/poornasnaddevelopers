import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './Layout/adminlayout/adminlayout.component';
import { AuthenticationlayoutComponent } from './Layout/authenticationlayout/authenticationlayout.component';
import { ADMIN_ROUTES } from './Routing/admin-routing';
import { AUTHENTICATION_ROUTING } from './Routing/authentication-routing';

const routes: Routes = [
  {path:'',component:AuthenticationlayoutComponent,children:AUTHENTICATION_ROUTING},
  {path:'admin',component:AdminlayoutComponent,children:ADMIN_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
