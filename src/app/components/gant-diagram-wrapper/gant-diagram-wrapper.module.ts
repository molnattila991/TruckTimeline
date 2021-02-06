import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GantDiagramWrapperComponent } from './gant-diagram-wrapper/gant-diagram-wrapper.component';



@NgModule({
  declarations: [GantDiagramWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GantDiagramWrapperComponent
  ]
})
export class GantDiagramWrapperModule { }
