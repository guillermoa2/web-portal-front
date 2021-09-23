import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // tabs: string[] = ['Board', 'Committees', 'Meetings', 'Documents', 'Members'];


  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  onClickSignOut() {
    this.authService.login(null)
  }

} 