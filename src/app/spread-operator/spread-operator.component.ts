import { Component, OnInit } from '@angular/core';

interface IStudent {
  name: string;
}

@Component({
  selector: 'app-spread-operator',
  templateUrl: './spread-operator.component.html',
  styleUrls: ['./spread-operator.component.css']
})
export class SpreadOperatorComponent implements OnInit {
  students: IStudent[] = [
    { name: `Jack` },
    { name: `Mike` },
    { name: `Larry` }
  ];

  constructor() { }

  ngOnInit() {
  }

  tomJoins = () => {
    const tom: IStudent = {
      name: `Tom`
    };

    this.students = [tom, ...this.students];
  }

  rest = () => {
    const person = {
      name: `john lennon`,
      gender: `male`,
      address: `strawberry field`
    };

    const {name, ...rest} = person;
    alert(`name: ${name} \r\n gender: ${rest.gender} address: ${rest.address}`);
  }

}
