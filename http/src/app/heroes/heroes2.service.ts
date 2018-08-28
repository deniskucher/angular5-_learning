import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
// import { Product } from "./product";

import { Observable } from "rxjs/Observable";

@Injectable()
export class HeroesService {
    
    private url = "http://localhost:8080/addData";

    // private handleError: HandleError;

    constructor(private http: Http) { }

    public addDataServ(data: string) {
        console.log('===addDataServ====');
        return this.http.post(this.url, data)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }

}
