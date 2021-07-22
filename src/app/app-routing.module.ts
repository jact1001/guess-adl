import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./index/index.module').then((mod) => mod.IndexModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((mod) => mod.AboutModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then((mod) => mod.ExampleModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then((mod) => mod.MediaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
