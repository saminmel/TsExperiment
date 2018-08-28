import { Component, OnInit } from '@angular/core';

interface IEmployee {
  fullname: string;
  gender: string;
}

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

  generateEmployee = (): IEmployee => {
    return {
      fullname: 'John Lennon',
      gender: 'M'
    };
  }

  destructuring = () => {
    const employee = this.generateEmployee();
    const { fullname, gender } = employee;

    console.log(fullname);
    console.log(gender);
  }

  destructuringWithRename = () => {
    const employee = this.generateEmployee();
    const { gender: sex } = employee;
    console.log(sex);
  }
  // there are other types of destructuring, like array destructuring, destructuring with rest, destructuring with ignores.
}
