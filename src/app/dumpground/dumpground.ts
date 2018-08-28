import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dump-ground',
    template: `
    <h1>Tour of Heroes</h1>
    <p>{{ name$ | async }}</p>
  `
})
export class DumpGroundComponent implements OnInit {
    name$: Observable<string>;
    ngOnInit(): void {

    }

    arrayOperators = (): void => {
        // we have concat(), every(), filter(), reduce(), slice()
        // we tend not to use lodash or underscore
    }
}
