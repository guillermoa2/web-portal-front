import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import {FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-meetings-dialog',
  templateUrl: './meetings-dialog.component.html',
  styleUrls: ['./meetings-dialog.component.css']
})
export class MeetingsDialogComponent implements OnInit {
  meetingForm: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  attendeeCtrl = new FormControl();
  filteredAttendees: Observable<string[]>;
  attendees: string[] = [];
  allAttendees: string[] = [
    'Guillermo Acosta',
    'Lucas Philips',
    'Dawood Zakaria',
    'Connor Steele',
    'Taylor LaMar'
  ];

  @ViewChild('attendeeInput') attendeeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor() {
    this.filteredAttendees = this.attendeeCtrl.valueChanges.pipe(
      startWith(null),
      map((attendee: string | null) => attendee ? this._filter(attendee) : this.allAttendees.slice()));
    }

  ngOnInit(): void {
    this.meetingForm = new FormGroup({
      meetingName: new FormControl(null,{validators: [Validators.required, Validators.minLength(3)]}),
      meetingTime: new FormControl(null, {validators: [Validators.required]}),
      agenda: new FormControl(null,{validators: [Validators.required]}),
      attendeeList: new FormArray([
      ])
    });
  }

  get attendeeList(): FormArray {
    return this.meetingForm.get('attendeeList') as FormArray;
  }


  onAddMeeting(meetingForm: any, formDirective: FormGroupDirective) {
    if (this.meetingForm.invalid) {
      return;
    } else {
      console.log(this.meetingForm.value);
    }
    this.attendees = [];
    formDirective.resetForm();
    this.meetingForm.reset();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our attendee
    if ((value || '').trim()) {
      this.attendees.push(value.trim());
      this.attendeeList.value.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.attendeeCtrl.setValue(null);
  }

  remove(index: number): void {
    // console.log(this.attendees);
    this.attendees.splice(index, 1);
    this.attendeeList.value.splice(index, 1);
    // console.log('attendeeList', this.attendeeList);
    // console.log('attendees', this.attendees);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.attendees.push(event.option.viewValue);
    this.attendeeList.value.push(event.option.viewValue);
    this.attendeeInput.nativeElement.value = '';
    this.attendeeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAttendees.filter(attendee => attendee.toLowerCase().indexOf(filterValue) === 0);
  }


}
