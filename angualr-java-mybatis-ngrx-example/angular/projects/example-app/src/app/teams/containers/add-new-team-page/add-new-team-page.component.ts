import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamActions } from '../../actions';
import { Store } from '@ngrx/store';
import * as fromTeams from "../../reducers";
import { Team } from '@example-app/teams/models';
@Component({
    selector: 'app-add-new-team-page',
    templateUrl: './add-new-team-page.component.html'
})
export class AddNewTeamPageComponent{
    constructor(private store: Store<fromTeams.State>){
        
    }
    addTeam(team:Team){
        console.log(team);
        this.store.dispatch(TeamActions.addTeam({team }));
    }
}