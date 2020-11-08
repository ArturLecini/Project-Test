import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
    imports: [
        FlexLayoutModule,

        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,

        MatStepperModule,

        MatDialogModule,
        MatExpansionModule,


        MatIconModule,

        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,

        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,

        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatProgressSpinnerModule,

        MatAutocompleteModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
    ],

    exports: [
        FlexLayoutModule,

        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatStepperModule,

        MatDialogModule,
        MatExpansionModule,


        MatIconModule,

        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,

        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,

        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],

    providers: []
})
export class MaterialModule {
    constructor(public matIconRegistry: MatIconRegistry) {
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }

    static forRoot(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [MatIconRegistry]
        };
    }
}