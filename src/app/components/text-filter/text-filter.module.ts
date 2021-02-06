import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterViewComponent } from './text-filter-view/text-filter-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [TextFilterViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TextFilterViewComponent
  ]
})
export class TextFilterModule { }
