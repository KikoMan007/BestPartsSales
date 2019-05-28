import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  aboutText: string;

  constructor(private flexModal: FlexModalService) { }

  ngOnInit() {

    this.aboutText = 'This application is designed by Michael Asavamedhi. (C) 2018.';
  }

  showModal() {
    this.flexModal.openDialog('about-modal');
    console.log("yayaya")


  }


  // Launch flex modal or alert (3pts reduced) showing about text

}
