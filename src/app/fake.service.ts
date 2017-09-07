import { Injectable } from '@angular/core';
import { IBrand } from './types.dt';
@Injectable()
export class FakeService {

  constructor() { }

  getBrand = (): IBrand | undefined => {
    return {
      name: 'toyota'
    };
  }
}
