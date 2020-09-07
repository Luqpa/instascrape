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


/*
* Component: view-osmmap
*
*/ 

export class osmMapManagement {
    cssmapid:string;
    csscontainerid:string
    objmap:any;

    constructor(cssmapid, csscontainerid, objmap)
    {
        this.cssmapid = cssmapid;
        this.csscontainerid = csscontainerid;
        this.objmap = objmap;
    }

    adjustmaptofitcontainer (){
        console.log('adjustmaptofitcontainer');
        let nodeContainerMapHolder = document.getElementById(this.csscontainerid);
        let nodeContainerMap = document.getElementById(this.cssmapid);
        console.log(this.csscontainerid);
        console.log(nodeContainerMapHolder.clientHeight);

        //nodeContainerMap.style.height = nodeContainerMapHolder.offsetHeight+'px';
        this.objmap.updateSize();
    }
}