import { ImageAddComponent } from './components/image-add/image-add.component';

import { ImageUIComponent } from './components/image-ui/image-ui.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path : 'list',
    component: ImageUIComponent
  },
   {
    path : 'add',
    component: ImageAddComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
