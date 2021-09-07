import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MeetingsDialogComponent } from './meetings-dialog/meetings-dialog.component';

export interface Meeting {
  "Meeting name": string;
  "Meeting date": string;
  attendees: string[];
  menu: boolean;
}

export interface Attendee {
  first: string;
  last: string;
}

const MEETING_DATA: Meeting[] = [
  {
    "Meeting name": 'Customer onboarding',
    "Meeting date": 'August 7, 2021 at 9:00am',
    attendees: [
      'Connor Steele',
      'Lucas Philips',
      'Taylor LaMar',
      'Dawood Zakaria',
      'Guillermo Acosta',
    ],
    menu: true
  },
  {
    "Meeting name": 'Some other thing',
    "Meeting date": 'August 11, 2021 at 12:30pm',
    attendees: [
      'Taylor LaMar',
      'Dawood Zakaria',
    ],
    menu: true
  },
];

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  displayedColumns: string[] = ['Meeting name', 'Meeting date', 'attendees', 'menu'];
  dataSource = MEETING_DATA;
  faTrash = faTrash;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(MeetingsDialogComponent);
  }


}
