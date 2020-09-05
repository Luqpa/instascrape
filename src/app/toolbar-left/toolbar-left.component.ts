import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-left',
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.css']
})
export class ToolbarLeftComponent implements OnInit {

	menuItems: string[] = ['Main', 'Scrape', ,'Saved Profiles', 'Settings'];

  constructor() { }

  ngOnInit(): void {
  }

}
