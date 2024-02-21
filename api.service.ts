import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

   postTask(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
   }


   getTask(data : any){
    return this.http.get<any>("http://localhost:3000/gets",data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
   }

   updateTask(data : any){
    return this.http.put<any>("http://localhost:3000/puts",data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
   }

   deleteTask(data : any){
    return this.http.delete<any>("http://localhost:3000/deletes",data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
   }


}

