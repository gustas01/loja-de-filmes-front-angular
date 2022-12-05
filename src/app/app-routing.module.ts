import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        }
      ],
      title: 'Home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
