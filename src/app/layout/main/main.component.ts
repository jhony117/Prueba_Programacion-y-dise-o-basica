import {ChangeDetectionStrategy, Component } from '@angular/core';



import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterFormComponent } from '../../register-form/register-form.component';

@Component({
  selector: 'app-main',
  standalone: true,

imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,RegisterFormComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
