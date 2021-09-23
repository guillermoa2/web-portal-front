import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MeetingsDialogComponent } from './meetings-dialog/meetings-dialog.component';

import { MeetingService } from '/Users/Guillermo/Documents/bay-valley-tech/laMar-intern/project-portal-front/src/app/meeting.service'

export class Meeting {
  public meetingName: string;
  public meetingDate: string;
  public attendees: string[];
  // public menu: boolean;
}

export interface Attendee {
  first: string;
  last: string;
}

const MEETING_DATA: Meeting[] = [
  {
    meetingName: 'Customer onboarding',
    meetingDate: 'August 7, 2021 at 9:00am',
    attendees: [
      'Connor Steele',
      'Lucas Philips',
      'Taylor LaMar',
      'Dawood Zakaria',
      'Guillermo Acosta',
    ],
    // menu: true
  },
  {
    meetingName: 'Some other thing',
    meetingDate: 'August 11, 2021 at 12:30pm',
    attendees: [
      'Taylor LaMar',
      'Dawood Zakaria',
    ],
    // menu: true
  },
];

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  displayedColumns: string[] = ['Meeting name', 'Meeting date', 'attendees', 'menu'];
  // dataSource = MEETING_DATA;
  dataSource = [];

  constructor(public dialog: MatDialog, private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getAllMeetings().then((meeting) => {
      console.log('meeting', meeting)
      this.dataSource = meeting
    });
  }
*
  openDialog() {
    this.dialog.open(MeetingsDialogComponent);
  }


}
