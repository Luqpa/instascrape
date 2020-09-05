import { AfterViewInit, Component, OnInit, Directive, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';


/*data models imports*/
import {itemGeoRoute, listGeoRouteManagement} from '../models/models-generic';


@Component({
  selector: 'app-listvertical-georoutes',
  templateUrl: './listvertical-georoutes.component.html',
  styleUrls: ['./listvertical-georoutes.component.css']
})
export class ListverticalGeoroutesComponent implements OnInit {

  arrgeolistitems:itemGeoRoute[] =[];
  selectedListItem: itemGeoRoute;

  @ViewChild('georouteslist', {static: false}) georouteslist: ElementRef; //reference to the node of the list
  @ViewChildren("divs") divs: QueryList<ElementRef>;

  constructor() { 

    let ita = new itemGeoRoute('','','','');
    let itb = new itemGeoRoute('','','','');

    ita.id = "gra";
    ita.title = '"OBI" - Name of the package';
    ita.subtitle = 'subtitle';
    ita.descriptions = "Route: Zory, PL - Warszawa, PL";

    itb.id = "grb";
    itb.title = 'Zory, PL';
    itb.subtitle = 'subtitle';
    itb.descriptions = "Warszawa, PL";

    this.arrgeolistitems = [ita,itb];
    console.log(this.arrgeolistitems);

    //selecting the first element
    //this.selectedListItem.title = 'aaaa';
    console.log(this.selectedListItem);
  }

  

  ngOnInit(): void {
    console.log('listvertical-georoutes - oninit');

    //console.log(georouteslist);
    console.log(this.arrgeolistitems[0]);
    console.log(this.selectedListItem);
    //this.selectedListItem = this.arrgeolistitems[0];
  }

  ngAfterViewInit() {
    console.log('afterviewinit');
    console.log(this.georouteslist);
    console.log(this.divs);
    this.divs.forEach((div: ElementRef) => console.log(div.nativeElement));
  }

  onNgModelChange(event){
    console.log(event);
    console.log('on ng model change', event);

    console.log('afterviewinit');
    console.log(this.georouteslist);
    console.log(this.divs);
    this.divs.forEach((div: ElementRef) => console.log(div.nativeElement));
  }

  /*
  * Starting the looping of the list items
  *
  */
  doLoopGeoListItems():void{

  }

}
