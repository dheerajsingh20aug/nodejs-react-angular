import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ListComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
