import { Injectable } from '@angular/core';

export interface IBrand {
  name: string;
}

@Injectable()
export class CallbackService {
  brand: IBrand = { name: `holden` };

  constructor() { }

  functionCallback() {
    return this.brand.name; // will go bang!
  }

  arrowFunctionCallback = () => {
    return this.brand.name;
  }
}
