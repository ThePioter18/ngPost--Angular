import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';

const myModule = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    myModule
  ],
  exports: [myModule],
  declarations: []
})
export class MaterialModule { }
