import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {BankPageComponent} from './containers/BankPage';
import { TeamsRoutingModule } from '@example-app/teams/teams-routing.module';
// import {
//   BookAuthorsComponent,
//   BookDetailComponent,
//   BookPreviewComponent,
//   BookPreviewListComponent,
//   BookSearchComponent,
// } from '@example-app/books/components';
// import {
//   CollectionPageComponent,
//   FindBookPageComponent,
//   SelectedBookPageComponent,
//   ViewBookPageComponent,
// } from '@example-app/books/containers';
import { TeamEffects, TeamListEffects } from './effects';

import * as fromTeams from './reducers';
import { MaterialModule } from '@example-app/material';
import { PipesModule } from '@example-app/shared/pipes';
import { TeamListPageComponent } from './containers';
import { AddNewTeamPageComponent } from './containers/add-new-team-page/add-new-team-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamFormComponent } from './components/team-form.component';
export const COMPONENTS = [
  TeamFormComponent
];

export const CONTAINERS = [
  TeamListPageComponent,
  BankPageComponent,
  AddNewTeamPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TeamsRoutingModule,
    ReactiveFormsModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromTeams.teamsFeatureKey, fromTeams.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([TeamEffects, TeamListEffects]),
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TeamsModule {}
