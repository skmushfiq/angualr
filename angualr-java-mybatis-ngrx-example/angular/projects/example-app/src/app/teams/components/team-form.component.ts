import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'app-add-team-form',
    templateUrl: './team-form.component.html'
})
export class TeamFormComponent{
    form: FormGroup = new FormGroup({
        teamName: new FormControl(''),
        id: new FormControl(0),
    });

    submit() {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }

    @Output() submitted = new EventEmitter<any>();

}