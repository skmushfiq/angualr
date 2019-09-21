import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TeamListPageActions } from '../actions';
import { Team } from '@example-app/teams/models';
import * as fromTeams from '../reducers';

@Component({
  selector: 'app-team-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'team-list-page.component.html',
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class TeamListPageComponent implements OnInit {
    teams$: Observable<Team[]>;

  constructor(private store: Store<fromTeams.State>) {
    this.teams$ = store.pipe(select(fromTeams.getTeamCollection));
    //alert();
  }

  ngOnInit() {
    this.store.dispatch(TeamListPageActions.loadList());
//    alert();
    this.teams$.subscribe(it=>console.log(it));
  }
}
