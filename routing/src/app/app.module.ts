import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/parent/child1/child1.component';
import { Child2Component } from './components/parent/child2/child2.component';
import { ShopComponent } from './components/shop/shop.component';
import { ClothingComponent } from './components/shop/clothing/clothing.component';
import { MenComponent } from './components/shop/clothing/men/men.component';
import { WomenComponent } from './components/shop/clothing/women/women.component';
import { SessionComponent } from './components/session/session.component';
import { QueryPComponent } from './components/query-p/query-p.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ShopComponent,
    ClothingComponent,
    MenComponent,
    WomenComponent,
    SessionComponent,
    QueryPComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
