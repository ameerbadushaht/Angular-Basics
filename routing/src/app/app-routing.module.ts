import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/feature/blogs/blogs.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AuthGuard } from './environment/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { Child1Component } from './components/parent/child1/child1.component';
import { Child2Component } from './components/parent/child2/child2.component';
import { ParentComponent } from './components/parent/parent.component';
import { ShopComponent } from './components/shop/shop.component';
import { ClothingComponent } from './components/shop/clothing/clothing.component';
import { WomenComponent } from './components/shop/clothing/women/women.component';
import { MenComponent } from './components/shop/clothing/men/men.component';

const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () =>
      import('./components/feature/feature.module').then(
        (m) => m.FeatureModule
      ),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'signin',
    component: FeatureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },

  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'clothing',
        component: ClothingComponent,
        children: [
          { path: 'women', component: WomenComponent },
          { path: 'men', component: MenComponent },
        ],
      },
    ],
  },


  {
    path:'blogs/:id',
    component:BlogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
