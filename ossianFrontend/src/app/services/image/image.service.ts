import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModule } from 'src/app/models/image/image.module';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { 
  }

  list() {
    console.log('service list')
    return this.http.get<ImageModule[]> (`${environment.apiUrlBackEnd}/list`);
    }

  delete(id) {
      return this.http.delete(`${environment.apiUrlBackEnd}/delete/${id}`);
    }
  edit(image){
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${environment.apiUrlBackEnd}/update`,image, {headers: headers} );
  }
  add(image){
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${environment.apiUrlBackEnd}/create`,image, {headers: headers} );
  }
  import() {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.http.get(`${environment.apiUrlBackEnd}/import`, {headers: headers});
  }
  show(dates) {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${environment.apiUrlBackEnd}/show`,dates,{headers: headers});
  }
}
