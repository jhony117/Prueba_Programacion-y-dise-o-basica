import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import mapboxgl, {Map, Marker} from 'mapbox-gl';

import { environment } from '../../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { OnlyNumbersDirective } from '../directivas/only-numbers/only-numbers.directive';
import { StandaloneComponentsModuleModule } from '../standalone-components-module/standalone-components-module.module';

@Component({
  selector: 'app-mapp-box',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, StandaloneComponentsModuleModule],
  templateUrl: './mapp-box.component.html',
  styleUrl: './mapp-box.component.css'
})
export class MappBoxComponent implements AfterViewInit {

constructor(private fb:FormBuilder) {}



  @ViewChild('map')divMap! : ElementRef;

        @Input() lngLat?: [number, number];
// Todo obtener datyos desde el servicio
  public cordenadas:FormGroup = this.fb.group({
    x: ['',Validators.required],
    y: ['',Validators.required],
  });




  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw 'Map Div not found';


    mapboxgl.accessToken = environment.mapbox_key;

    const map = new mapboxgl.Map({
      container : this.divMap!.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center : [10, 12],
      zoom : 9,
      interactive :true,
      attributionControl: false,
    });

 map.addControl(new mapboxgl.NavigationControl());


  }

  setCordenadas() {
    const cordenadas =  this.cordenadas.getRawValue();

      console.log(cordenadas);

  }



}
