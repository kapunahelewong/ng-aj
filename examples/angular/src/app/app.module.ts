import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuilderModule } from '@builder.io/angular';

import { AppComponent, CustomThing } from './app.component';
import { FooComponent } from './foo.component';
import { WithchildrenComponent } from './withchildren/withchildren.component';

@NgModule({
  declarations: [AppComponent, FooComponent, CustomThing, WithchildrenComponent],
  entryComponents: [ WithchildrenComponent],
  imports: [
    BrowserModule,
    BuilderModule.forRoot('f256dd56078448c49674160f604558ef'),
    RouterModule.forRoot([
      {
        path: '**',
        component: FooComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
