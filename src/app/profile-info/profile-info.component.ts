import { Component, Input, OnInit } from '@angular/core';

/*interfaces*/
import { QueryProfileinfo } from '../interfaces/scrape';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

	@Input() receviedquerprofileinfo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
