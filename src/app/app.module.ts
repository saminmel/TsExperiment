import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { ShutUpTslintComponent } from './shut-up-tslint/shut-up-tslint.component';
import { CallbackComponent } from './callback/callback.component';

import { CallbackService } from './callback.service';
import { SpreadOperatorComponent } from './spread-operator/spread-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    DestructuringComponent,
    ShutUpTslintComponent,
    CallbackComponent,
    SpreadOperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
