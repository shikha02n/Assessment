import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientsComponent } from './add-ingredients.component';

const routes: Routes = [{
  path: 'add',
  component: AddIngredientsComponent
}];

@NgModule({
  declarations: [
    AddIngredientsComponent
  ],
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AddIngredientsModule { }
