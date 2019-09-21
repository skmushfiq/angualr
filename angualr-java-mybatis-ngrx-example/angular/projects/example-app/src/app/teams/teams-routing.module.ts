import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankPageComponent} from './containers/BankPage';
import {
  TeamListPageComponent
} from '@example-app/teams/containers';
import { AddNewTeamPageComponent } from './containers/add-new-team-page/add-new-team-page.component';
//import { BookExistsGuard } from '@example-app/teams/guards';

export const routes: Routes = [
  // {
  //   path: 'find',
  //   component: FindBookPageComponent,
  //   data: { title: 'Find book' },
  // },
  // {
  //   path: ':id',
  //   component: ViewBookPageComponent,
  // //  canActivate: [BookExistsGuard],
  //   data: { title: 'Book details' },
  // },
  {
    path: 'addNew',
    component: AddNewTeamPageComponent,
    data: { title: 'Collection' },
  },
  {
    path: 'blank',
    component: BankPageComponent,
    data: { title: 'Collection' },
  },
  {
    path: '',
    component: TeamListPageComponent,
    data: { title: 'Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
