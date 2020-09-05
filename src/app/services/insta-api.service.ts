import { Injectable } from '@angular/core';

/*
* You can then inject the HttpClient service as a dependency of an application class
*/
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


/*
*The HttpClient service makes use of observables for all transactions. 
* You must import the RxJS observable and operator symbols that appear in the example snippets. 
* These ConfigService imports are typical.
*/
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/*
* Interfaces
*/
import { ApiConfig, QueryProfileinfo, QueryConfig } from '../interfaces/scrape';

@Injectable({
  providedIn: 'root'
})
export class InstaApiService {

	configApi = 'assets/api.json';


	constructor
	(
		private http: HttpClient
	) 
	{ }


	getApiConfig(){
  		console.log('in getApiConfig - service');
  		return this.http.get<ApiConfig>(this.configApi); //
  	}

  	/*makin a query*/
  	getData(queryParams){
  		console.log('getting data - getData');

  		console.log(queryParams);

  		let urlApiPoint = queryParams.url;
  		

  		const params = new HttpParams()
			.set('requestype', 'json')
			.set('profilename',queryParams.profilename)
			
		const options = {
			headers: new HttpHeaders({
			    'Accept': 'text/html',
			    'Content-Type': 'text/plain; charset=utf-8'
			}), 
			params:params, 
			responseType: 'text' as 'json'
		};

		console.log('prarams');
		console.log(options);

  		return this.http.get<string>(urlApiPoint,options);
  	}


}
