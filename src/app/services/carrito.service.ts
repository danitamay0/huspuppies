import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {
  public totalItems = 0;
  constructor() { }

  sumar(){
    this.totalItems += 1; 
  }
  restar(){
    this.totalItems -= 1; 
  }
}
