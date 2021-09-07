import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import {NgForm} from '@angular/forms';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

// interface Food {
//   name: string;
//   viewName: string;
// }

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
  meetingName:string = '';
  meetingTime:Date; // :string??
  attendees: Attendee[] = [
    {name: 'connor-0', viewName: 'Connor Steele'},
    {name: 'lucas-1', viewName: 'Lucas Philips'},
    {name: 'taylor-2', viewName: 'Taylor LaMar'},
    {name: 'guillermo-3', viewName: 'Guillermo Acosta'},
    {name: 'dawood-4', viewName: 'Dawood Zakaria'}
  ];


  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;




  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }

  ngOnInit(): void {
  }

  onAddMeeting(form: NgForm) {
    console.log(form);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

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

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
