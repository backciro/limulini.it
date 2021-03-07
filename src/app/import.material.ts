import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule, MatProgressSpinnerModule,
    MatNativeDateModule, MatDialogModule, MatSnackBarModule,
    MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatListModule, MatFormFieldModule,  MatInputModule, MatSelectModule,
    MatDatepickerModule, MatAutocompleteModule, MatToolbarModule, MatTabsModule,
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        MatTableModule,         // table
        MatSortModule,          // table
        MatPaginatorModule,     // table
        MatListModule,
        MatFormFieldModule,     // Form
        MatInputModule,         // Form
        MatSelectModule,        // Form
        MatDatepickerModule,    // Form
        MatAutocompleteModule   // Form
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        MatTableModule,         // table
        MatSortModule,          // table
        MatPaginatorModule,     // table
        MatListModule,
        MatFormFieldModule,     // Form
        MatInputModule,         // Form
        MatSelectModule,        // Form
        MatDatepickerModule,    // Form
        MatAutocompleteModule   // Form
    ],
})
export class MaterialModule { }
