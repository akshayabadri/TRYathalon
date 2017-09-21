import { Routes, RouterModule } from '@angular/router';


import {CustomerInputComponent } from './tryathlon/customerInput.component';


const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customerInput' },
  
  // {path:'di',component:DiComponent},
  
  {path:'customerInput' , component:CustomerInputComponent},


];

export const app_routing = {
  routes: RouterModule.forRoot(app_routes),
  components: [ 
                CustomerInputComponent
              ]
}