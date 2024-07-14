import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


// forms
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { merge } from 'rxjs';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class RegisterFormComponent implements OnInit {

  static patternForPostalCode = '/^[0-9]{5}$/';

  public form:FormGroup = this.fb.group({ // el priemr arguimento '' es el valor inicial 
    id: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    tel: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)],
    createdAt: ['', Validators.required,],
    reference: ['', Validators.required],
    city: ['', Validators.required],
    estado: ['', Validators.required],
    calle: ['', Validators.required],
    colonia: ['', Validators.required],
    cp: ['', Validators.required, Validators.pattern(/^[0-9]{5}$/)],
});;

//signals
  errorEmailMessage = signal('');
  errorCpMessage = signal('');


  constructor(private fb: FormBuilder) {
    }


  

    ngOnInit(): void {
    // Supongamos que tienes un formulario llamado 'myForm' y un control llamado 'email'
 this.onEmailChanges();
 this.onCpChanges();
 



 
   }
    
 // "lsiteners"
    onEmailChanges() {
   this.form.get('email')!.valueChanges
   .subscribe(() => this.emailErrorMessage)
    }

    onCpChanges() {
      this.form.get('cp')!.valueChanges
      .subscribe(() => this.cpErrorMessage)
       }

       onGenericChanges(input : string) {
 
    const inputForm =    this.form.get(input)!

        let genericErrorMesage = 'Este campo es obligatorio';
    
          return genericErrorMesage;
       }

  
    //gets
    get emailControl() {
      return this.form.get('email');
    }
  
    get cpControl() {
      return this.form.get('cp');
    }




    // Errores
    get emailErrorMessage() {
      if (this.emailControl!.hasError('required')) {
        this.errorEmailMessage.set('El correo electrónico es obligatorio')
      } else if (this.emailControl!.hasError('email')) {
        this.errorEmailMessage.set('El formato del correo electrónico no es válido.');
      }
      return false; // No hay error personalizado
    }


    get cpErrorMessage() {
      if (this.cpControl!.hasError('required')) {
        this.errorCpMessage.set('el campo es obligatorio')
      } else if (this.cpControl!.hasError('pattern')) {
        this.errorCpMessage.set('El formato es incorrecto');
      }
      return false; // No hay error personalizado
    }
}
