import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { ShutUpTslintComponent } from './shut-up-tslint/shut-up-tslint.component';
import { CallbackComponent } from './callback/callback.component';

import { CallbackService } from './callback.service';

@NgModule({
  declarations: [
    AppComponent,
    DestructuringComponent,
    ShutUpTslintComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
