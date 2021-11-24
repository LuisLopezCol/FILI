import { Component, OnInit } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
