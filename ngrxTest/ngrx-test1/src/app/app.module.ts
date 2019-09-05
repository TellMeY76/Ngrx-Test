import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './core/app-routing.module';
import {AppComponent} from './core/app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {HomeComponent} from './pages/home/home.component';
import {CreateComponent} from './pages/create/create.component';
import {CompleteComponent} from './pages/complete/complete.component';
import {petTagReducer} from './reducers/pet-tag.reducers';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import {FormsModule} from '@angular/forms';
import { TagPreviewComponent } from './components/tag-preview/tag-preview.component';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagPreviewComponent,
    TagTextComponent,
    TagExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forRoot({petTag: petTagReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
