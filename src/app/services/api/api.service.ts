import { Injectable } from '@angular/core';
// import { Https, RequestOptions, Headers } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // private data: any = {};
    // private opt: RequestOptions;
    //  private url: string = 'https://matger-tutia.com/api/';

    constructor(
    //   public http: Http
      ) {
    }

    // getData(endpoint: string, data:{} = {}) {
    //     const fullUrl: string = this.url + endpoint;
    //     return new Promise(resolve => {
    //         this.http.post(fullUrl, {
    //             data
    //         },this.opt)
    //             .map(res => res.json())
    //             .subscribe(data => {
    //                 this.data = data;
    //                 resolve(this.data.data);
    //             });
    //     });
    // }

    // postData(endpoint: string, data:{} = {}) {
    //     const fullUrl: string = this.url + endpoint;
    //     return new Promise(resolve => {
    //         this.http.post(fullUrl, {
    //             data
    //         },this.opt)
    //         .map(res => res.json())
    //         .subscribe(data => resolve(this.data));
    //     });
    // }
}
