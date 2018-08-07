import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Flex Layout
import {FlexLayoutModule} from '@angular/flex-layout';

//Angular Material Modules
import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

//Modules created
import {Footer} from './Footer/footer.component';
import {Main} from './Main/main.component';

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule, 
  BrowserAnimationsModule,
  FlexLayoutModule, 
  MatButtonModule, 
  MatCheckboxModule , 
  MatCardModule, 
  MatSidenavModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
  MatTooltipModule
  ],

  declarations: [ AppComponent,
   HelloComponent,
   Footer,
   Main
   ],

  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
