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


export interface Attendee {
  name: string;
  viewName: string;
}



@Component({
  selector: 'app-meetings-dialog',
  templateUrl: './meetings-dialog.component.html',
  styleUrls: ['./meetings-dialog.component.css']
})
export class MeetingsDialogComponent implements OnInit {
  meetingForm: FormGroup;
  // meetingName:string = '';
  // meetingTime:Date; // :string??
  attendees: Attendee[] = [
    {name: 'connor-0', viewName: 'Connor Steele'},
    {name: 'lucas-1', viewName: 'Lucas Philips'},
    {name: 'taylor-2', viewName: 'Taylor LaMar'},
    {name: 'guillermo-3', viewName: 'Guillermo Acosta'},
    {name: 'dawood-4', viewName: 'Dawood Zakaria'}
  ];



  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;




  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }

  ngOnInit(): void {
    this.meetingForm = new FormGroup({
      'meetingName': new FormControl(null,{validators: [Validators.required, Validators.minLength(3)]}),
      'meetingTime': new FormControl(null, {validators: [Validators.required]}),
      'agenda': new FormControl(null,{validators: [Validators.required]}),
      // 'fruitList': new FormArray([])
    });
  }


  onAddMeeting(meetingForm: any, formDirective: FormGroupDirective) {
    if (this.meetingForm.invalid) {
      return;
    } else {
      console.log(this.meetingForm.value);
    }
    formDirective.resetForm();
    this.meetingForm.reset();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


}
