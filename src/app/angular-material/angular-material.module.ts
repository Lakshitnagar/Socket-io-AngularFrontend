import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule, 
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
