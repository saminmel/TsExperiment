import { Component, OnInit } from '@angular/core';

interface IProduct {
  brand: IBrand | undefined;
  name: string;
}

interface IBrand {
  name: string;
}

@Component({
  selector: 'app-shut-up-tslint',
  templateUrl: './shut-up-tslint.component.html',
  styleUrls: ['./shut-up-tslint.component.css']
})
export class ShutUpTslintComponent implements OnInit {
  product: IProduct = {
    name: 'old product',
    brand: { name: 'brand' }
  };

  constructor() { }

  ngOnInit() {
  }

  method = () => {
    if (this.product.brand.name === 'old product') {
      this.product = this.product;
    }
  }

}
