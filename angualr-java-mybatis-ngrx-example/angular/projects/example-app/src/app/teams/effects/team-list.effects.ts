import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  TeamListApiActions,
  TeamListPageActions,
  TeamActions
} from '../actions';
import { Team } from '@example-app/teams/models';
import { TeamStorageService } from '@example-app/core/services';

@Injectable()
export class TeamListEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the supported call in `defer` makes
   * effect easier to test.
   */
  checkStorageSupport$ = createEffect(
    () => defer(() => this.storageService.supported()),
    { dispatch: false }
  );

  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamListPageActions.loadList),
      switchMap(() =>
        this.storageService.getCollection().pipe(
          map((teams: Team[]) =>
            TeamListApiActions.loadTeamsSuccess({ teams })
          ),
          catchError(error =>
            of(TeamListApiActions.loadTeamsFailure({ error }))
          )
        )
      )
    )
  );

  addTeamToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.addTeam),
      mergeMap(({ team }) =>
        this.storageService.addToCollection([team]).pipe(
          map(() => TeamListApiActions.addTeamSuccess({ team })),
          catchError(() => of(TeamListApiActions.addTeamFailure({ team })))
        )
      )
    )
  );

  // removeTeamFromCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedTeamPageActions.removeTeam),
  //     mergeMap(({ team }) =>
  //       this.storageService.removeFromCollection([team.id]).pipe(
  //         map(() => TeamListApiActions.removeTeamSuccess({ team })),
  //         catchError(() => of(TeamListApiActions.removeTeamFailure({ team })))
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private storageService: TeamStorageService
  ) {}
}
