import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    // use angular's activated route to get params from Orders page
  }

  ngOnInit() {



  }
}

  // convert name passed from the Orders page to <First Name> <Last Name> and display text

