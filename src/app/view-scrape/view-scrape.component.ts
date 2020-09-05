import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  FormBuilder,  Validators } from '@angular/forms';

//For Routing
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


/*Child Components*/
import { ProfileInfoComponent } from '../profile-info/profile-info.component';

/*Services*/
import { InstaApiService } from '../services/insta-api.service';

/*interfaces*/
import { ScrapingOptions, ApiConfig, QueryProfileinfo, QueryConfig } from '../interfaces/scrape';



@Component({
  selector: 'app-view-scrape',
  templateUrl: './view-scrape.component.html',
  styleUrls: ['./view-scrape.component.css']
})
export class ViewScrapeComponent implements OnInit {

  scrapingOptions:ScrapingOptions;
  apiconfig:ApiConfig;

  queryprofileinfo:QueryProfileinfo;

  constructor(
  	private route: ActivatedRoute, /* For Routing - getting params */
  	private location: Location,
  	private instaapiservice: InstaApiService /* Service for quering ... api */
  ) 
  {
  	this.scrapingOptions = {
  		"apiendpoints": {},
  		"scrapemode": "",
  		"profiletoscrape": "",
		"ptsurl": "",
		"ptsname": "",
		"isscrapeongoing": false,
		"isscrapeprofilevaild": false,
		"isscrapeprofilesaved": false,
		"datascrapingform": {
		"profilename": new FormControl('')
		}
  	};
  	this.apiconfig = {};
  	this.queryprofileinfo = {};

  }

  ngOnInit(): void {
  	 this.getRoutingParams();
  	 console.log(this.scrapingOptions);

  	 //getting api config
  	 this.getApiConfig();
  }

  /*
  * Get data for api calls
  */
  getApiConfig(): void {

  	this.instaapiservice.getApiConfig()
  		.subscribe(
  			(queriedapiconfig) => {
  				this.apiconfig = queriedapiconfig;
  				console.log(queriedapiconfig);
  				//preparing apiend points and adding to main object

  				const strBaseUrl = `${queriedapiconfig.protocol}//${queriedapiconfig.ip}:${queriedapiconfig.port}/${queriedapiconfig.mainurl}`;
  				Object.entries(queriedapiconfig.endpoints).forEach(el_apiendpoint=>{

  					console.log(el_apiendpoint[0]);
  					console.log(el_apiendpoint[1]);
  				
  					this.scrapingOptions.apiendpoints[el_apiendpoint[0]] = strBaseUrl+el_apiendpoint[1];
  				});
  			},
  			(error)=>{
		    	console.log('error.... getting apiconfig');
		    		
		    }
  		)//end of subscribe
  			
		console.log(this.scrapingOptions.apiendpoints);

  } //end of getApiConfig

  getRoutingParams(): void {
  	const scrapetype = this.route.snapshot.paramMap.get('scrapetype');
  	this.scrapingOptions.scrapemode = scrapetype;

  	console.log(this.route.snapshot.paramMap);
  	console.log(scrapetype);

  }

  /*
  * Fired when validate button is clicked
  * a) check if profile does not exist in saved profiles
  * b) if !a then check online if the profile exists
  *
  * maker profile url from the name: baseUrl + / + profilename
  */
  validateProfile(): void {
  	console.log('validate clicked');

  	//const strSelectedProfileName = this.scrapingOptions.datascrapingform.profilename.value;
  	const strSelectedProfileName = "miasto_wodzislaw_slaski"; ///attach var from input field
  	console.log(this.apiconfig);

  	const queryParams = {
  		"url": this.scrapingOptions.apiendpoints['validate'],
  		"method": "GET",
  		"profilename": strSelectedProfileName
  	}

  	this.instaapiservice.getData(queryParams)
  		.subscribe(
  			
  			(dataQueryResponse) => {
  				console.log('response from validate');
  				console.log(dataQueryResponse);
  				dataQueryResponse = JSON.parse(dataQueryResponse);
  				console.log(dataQueryResponse);

  				this.queryprofileinfo = dataQueryResponse; ///!!!!

  				//Setting that profile is valid or not according to the response => impact on controls
  				this.queryprofileinfo.isonline  ?  this.scrapingOptions.isscrapeprofilevaild = true : this.scrapingOptions.isscrapeprofilevaild = false;
  				this.queryprofileinfo.isonline ? this.scrapingOptions.isscrapeprofilevaild = true : this.scrapingOptions.isscrapeprofilevaild = false;
  			
  				

  			},
  			(error)=>{
  				console.log('error - response after validate account');
  			}

  		) //end of subscribe

  	return null;
  }

}
