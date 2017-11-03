
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AuiIconModule } from '@aui/icon';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Add .withServerTransition() to support Universal rendering.
        // The application ID can be any identifier which is unique on
        // the page.
        BrowserModule.withServerTransition({appId: '@aui/icon-demo-id'}),
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppSharedModule,
        HomeModule,
        AuiIconModule.forRoot([
          {
            family: 'test',
            map: [
              {name: 'test', code: '123'}
            ]
          }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
