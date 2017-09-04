import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.css']
})
export class DestructuringComponent implements OnInit {
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset = () => {
    this.name = 'old product';
    this.description = 'old description';
  }

  destructuringClick = () => {
    let { name, description } = this;
    name = `new product`;
    description = `new description`;
    alert('destructuring click');
  }

  nondestructuringClick = () => {
    this.name = `new product`;
    this.description = `new description`;
    alert('non-destructuring click');
  }
}
