import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: SearchComponent},
  {path: '', component: SearchComponent},
  {path: 'torreApp', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile/:username', component: ProfileComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
