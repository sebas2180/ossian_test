import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule }  from '@angular/material/sort';

import { ImageComponent } from './components/image/image.component';
import { ImageUIComponent } from './components/image-ui/image-ui.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { ImportImagesComponent } from './components/image-ui/import-images/import-images.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageAddComponent } from './components/image-add/image-add.component';




@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageUIComponent,
    FormEditComponent,
    ImportImagesComponent,
    NavbarComponent,
    ImageAddComponent,

    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}