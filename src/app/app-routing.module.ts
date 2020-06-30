import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'chaussure', component: ChaussureComponent },
  { path: 'chaussure/add', component: AddChaussureComponent },
  { path: 'chaussure/:id', component: ChaussureDetailComponent },
  { path: 'edit-chaussure/:id', component: EditChaussureComponent },

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
