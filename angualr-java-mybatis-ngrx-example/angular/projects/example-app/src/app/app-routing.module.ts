import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@example-app/auth/services';
import { NotFoundPageComponent } from '@example-app/core/containers';
import { SecuredLayoutComponent } from './layouts/secured-layout/secured-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/secured/teams', pathMatch: 'full' },
  // {
  //   path: 'books',
  //   loadChildren: '@example-app/books/books.module#BooksModule',
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'secured',
    component: SecuredLayoutComponent,
    children: [{
      path: '',
      loadChildren: '@example-app/layouts/secured-layout/secured-layout.module#SecuredLayoutModule'
    }],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
