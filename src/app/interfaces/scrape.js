/*
* Managing object for scraping:
* Status
* Options
*/

export interface ScrapingOptions {
	"apiendpoints":any;
	"scrapemode":string;
	"profiletoscrape": string;
	"ptsurl": string;
	"ptsname": string;
	"isscrapeongoing": boolean;
	"isscrapeprofilevaild":boolean;
	"isscrapeprofilesaved":boolean;
	"datascrapingform":any;
}


/*
* Qury object - api: scraperinstagram/profileinfo 
* method:GET
* params: profilename
*
*/

export interface QueryProfileinfo {
	"issaved": boolean;
	"isonline": boolean;
	"dataonline":any;
}


/*
* Config for query
*/
export interface QueryConfig {
  url: string;
  endpoint: any;
  textfile: string;
}

/*
* Config for API
*/
export interface ApiConfig {
	"port":number;
	"protocol":string;
	"ip":string;
	"mainurl":string;
	"endpoints": any;

}