import { Component, OnInit } from '@angular/core';

/*open layers lib imports - for OSM Maps*/
import Map from 'ol/Map';
import View from 'ol/View';

import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';



import ImageLayer from 'ol/layer/Image';


import Circle from 'ol/geom/Circle';
import Feature from 'ol/Feature';


import GeoJSON from 'ol/format/GeoJSON';


import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';

import {CircleStyle }from 'ol/style/Circle';


import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';




import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';


import OSM from 'ol/source/OSM';

import * as olProj from 'ol/proj';

import Point from 'ol/geom/Point';

import Feature from 'ol/Feature';

import Projection from 'ol/proj/Projection';

/*osmmap control and methods helper*/
import {osmMapManagement} from '../models/models-generic';

@Component({
  selector: 'app-view-osmmmap',
  templateUrl: './view-osmmmap.component.html',
  styleUrls: ['./view-osmmmap.component.css']
})
export class ViewOsmmmapComponent implements OnInit {

  map:any; //for map object
  mapmanagement:osmMapManagement;

  constructor() { }

  ngOnInit(): void {

  	var osmLayer = new TileLayer({
	 	source: new OSM()
	});

	 var birmingham = olProj.transform([18.674450, 50.060540],
		'EPSG:4326', 'EPSG:3857');
	 	var view = new View({
	 	center: birmingham,
	 	zoom: 6
	 });

	 var view = new View({
	 	center: birmingham,
	 	zoom: 4
	 });

	 	var proj = new Projection("EPSG:4326");
	 	var point = new Point(16.373056, 48.208333);
	 	

	 	var iconFeature = new Feature({
  			geometry: new Point(olProj.transform([18.674450, 50.060540], 'EPSG:4326', 'EPSG:3857'))
		});

	 	

		var svg = '<?xml version="1.0"?>'
            + '<svg width="250" height="60" viewBox="0 0 241 52.47" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path class="cls-1" d="M11.71,42.36H10L4.5,53.93H6.23l1.54-3.3h5.91l1.47,3.3h1.7ZM8.46,49.12l2.34-4.94L13,49.12Zm35.71,3.27H37.09v-10H35.45V53.93h8.72Zm29-10H71.51v6.57a4.08,4.08,0,0,1-.83,2.82,4.27,4.27,0,0,1-5.28,0,4.06,4.06,0,0,1-.84-2.82V42.36H62.92v7.26a4.41,4.41,0,0,0,1.3,3.44A5.5,5.5,0,0,0,68,54.23a5.5,5.5,0,0,0,3.81-1.18,4.41,4.41,0,0,0,1.3-3.44Zm33.88,0H104.6L100,52.44,95.54,42.36H93.07V53.93h1.6l-.1-10.37,4.6,10.37h1.67l4.68-10.37-.1,10.37H107Zm21.64,0H127V53.93h1.64Zm31.1,0h-1.59v9.87l-7.29-9.87h-2.21V53.93h1.6V44.05l7.28,9.87h2.21Zm21.65,0h-1.64V53.93h1.64Zm30.2,0H210v6.57a4.08,4.08,0,0,1-.83,2.82,4.27,4.27,0,0,1-5.28,0,4.06,4.06,0,0,1-.84-2.82V42.36h-1.64v7.26a4.41,4.41,0,0,0,1.3,3.44,6.77,6.77,0,0,0,7.63,0,4.41,4.41,0,0,0,1.3-3.44Zm33.88,0h-2.44l-4.58,10.08L234,42.36h-2.47V53.93h1.6L233,43.56l4.6,10.37h1.67L244,43.56l-.1,10.37h1.6Z" transform="translate(-4.5 -1.77)"/>'
            + '<polygon class="cls-1" points="66.9 29.02 57.4 18.84 47.78 29.02 36.24 29.02 50.53 14.29 37.32 0 48.38 0 57.4 10.18 66.5 0 77.2 0 64.39 14.29 78.32 29.02 66.9 29.02"/>'
            + '<polygon class="cls-1" points="102.46 7.11 102.46 29.02 93.6 29.02 93.6 7.11 76.19 7.11 82.58 0 115.71 0 115.71 7.11 102.46 7.11"/>'
            + '<polygon class="cls-2" points="182.93 6.46 192.8 22 178.21 22 173.75 29.02 206.86 29.02 188.43 0 177.43 0 159 29.02 168.6 29.02 182.93 6.46"/>'
            + '<polygon class="cls-1" points="216.31 21.99 216.31 0 207.45 0 207.45 21.99 211.91 29.02 240.85 29.02 240.85 21.99 216.31 21.99"/>'
            + '<path class="cls-1" d="M4.56,1.77V8.82H42.92L36.26,1.77Zm0,11.47V30.79H36.61l6.3-7H13.42V19.33H30.06V13.24Z" transform="translate(-4.5 -1.77)"/><path class="cls-1" d="M155.32,22c2.92-1.26,4.07-3.77,4.07-8.42,0-.39,0-.38,0-.93h0c0-.08,0-.15,0-.22s0-.13,0-.22h0c0-.56,0-.54,0-.93,0-7.56-3-9.5-11.83-9.5H124.24V9h23c2.28,0,3.19,1,3.19,3.27,0,0,0,.1,0,.15s0,.1,0,.14c0,2.24-.92,3.27-3.19,3.27h-23V30.79h9V23.07h13.1l5.1,7.73h9.59Z" transform="translate(-4.5 -1.77)"/>'
            + '<style>.cls-1{fill:#002d63;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#afb7cb;}</style>'
            + '</svg>';

        svg = '<?xml version="1.0"?>'
            + '<svg width="100" height="60" viewBox="0 0 47 28.5" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<style>.cls-1{fill:#afb7cb;fill-rule:evenodd;}</style>'
            + '<polygon class="cls-1" points="23.5 6.34 33.19 21.6 18.86 21.6 14.48 28.5 47 28.5 28.9 0 18.1 0 0 28.5 9.43 28.5 23.5 6.34"/>'
            + '</svg>';

		var style = new Style({
            image: new Icon({
            	//imgSize: [250, 250],
      			//size: [250, 250],
                opacity: 1,
                scale: 0.5,
                src: 'data:image/svg+xml;base64,' + btoa(svg)
            })
        });

        iconFeature.setStyle(function(feature, resolution) {
        	console.log(feature);
        	
        	if (resolution < 7000){
        	
        	}
		    /*style.getImage().setScale(1/Math.pow(resolution, 1/10));*/
		    return style;
		});

        //iconFeature.setStyle(style);

        var vectorSource = new VectorSource({
		  features: [iconFeature]
		});

		var vectorLayer = new VectorLayer({
		  source: vectorSource
		});


  	this.map = new Map({
  	  layers:[
  	  	osmLayer, vectorLayer
  	  ],
      target: 'mapRoutingPresentation'
    });

  	//this.map.addLayer(osmLayer);
  	this.map.setView(view);

  	this.mapmanagement = new osmMapManagement('mapRoutingPresentation', 'containerMapPresentation', this.map);

  }

  ngAfterViewInit() {
  	setTimeout(() => this.mapmanagement.adjustmaptofitcontainer()); //adjusting map height to fit parent container
  }

}
