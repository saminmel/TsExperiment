import { Component, OnInit } from '@angular/core';
import { CallbackService } from '../callback.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  functionCallback: Function;
  arrowFunctionCallback: Function;
  result: string;

  constructor(callbackService: CallbackService) {
    this.functionCallback = callbackService.functionCallback;
    this.arrowFunctionCallback = callbackService.arrowFunctionCallback;
  }

  ngOnInit() {
  }

  functionCallbackClick() {
    this.result = this.functionCallback();
  }

  arrowFunctionCallbackClick() {
    this.result = this.arrowFunctionCallback();
  }
}
