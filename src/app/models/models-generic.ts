/*
* listvertical-georoutes
*/

export class listGeoRouteManagement {

    constructor (){

    }
}

export class itemGeoRoute {
    id:string;
    title: string;
    subtitle:string;
    descriptions:string;
    constructor(id,title,subtitle,descriptions) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.descriptions = descriptions;
    }
}