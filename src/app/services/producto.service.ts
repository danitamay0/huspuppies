
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/productoModel';

@Injectable() 
export class ProductoService {
  private _uriJson = 'assets/zapato.json'
  
  public producto$ = new BehaviorSubject<any>(0);
  public productos$ = new BehaviorSubject<any>(0);

  constructor(public http:HttpClient) {
   }

  public getProductos(){

    this.http.get(this._uriJson).subscribe((data:Array<Producto> )=> {
        this.producto$.next(data[0]);
        this.productos$.next(data);
      }
    );
    
  }




}
