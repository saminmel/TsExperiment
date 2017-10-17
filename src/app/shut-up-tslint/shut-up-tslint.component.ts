import { Component, OnInit } from '@angular/core';

import { FakeService } from '../fake.service';

import { IBrand, IProduct } from '../types.dt';

@Component({
  selector: 'app-shut-up-tslint',
  templateUrl: './shut-up-tslint.component.html',
  styleUrls: ['./shut-up-tslint.component.css']
})
export class ShutUpTslintComponent implements OnInit {
  constructor(private fakeService: FakeService) { }
  brandName: string;

  ngOnInit() {
  }

  method = () => {
    const product = {
      name: 'camry',
      brand: this.fakeService.getBrand()
    };
  }

  setBrandName(brandName?: string | undefined) {
    this.brandName = brandName!;
  }

}
