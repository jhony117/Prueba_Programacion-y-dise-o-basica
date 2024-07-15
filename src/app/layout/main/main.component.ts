import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';



import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterFormComponent } from '../../register-form/register-form.component';
import { MappBoxComponent } from '../../mapp-box/mapp-box.component';
import { UserTablesComponent } from '../../user-tables/user-tables.component';

@Component({
  selector: 'app-main',
  standalone: true,


imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,RegisterFormComponent,MappBoxComponent, UserTablesComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent     {





  // @ViewChild('img')img? : ElementRef; 



  public page : boolean = true;

  showListas(){
    this.page = true;
  }
  showRegister() {
     this.page = false;
  }
}
