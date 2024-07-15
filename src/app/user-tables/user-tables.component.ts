import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

//importar a exel
import * as XLSX from 'xlsx';

//importar a PDF
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserService } from '../../services/users.service';
import { Usuarios } from '../../interfaces/user.interface';
import { MatIconModule } from '@angular/material/icon';
import { catchError, from, Observable } from 'rxjs';




@Component({
  selector: 'app-user-tables',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './user-tables.component.html',
  styleUrl: './user-tables.component.css'
})
export class UserTablesComponent  {

  public ELEMENT_DATA: Usuarios[] = [
    {
       id: 1,
       nombre: 'Juan Pérez',
       tel: 5551234567,
       correo: 'juan@example.com',
       city: 'Los Angeles',
       cp: 90001,
     },
     {
       id: 2,
       nombre: 'María Rodríguez',
       tel: 5559876543,
       correo: 'maria@example.com',
       city: 'New York',
       cp: 10001,
     },
   ];

  constructor(private userService:UserService, private cdr: ChangeDetectorRef) {
 this.obtenerUsuarios()

  }


  displayedColumns: string[] =  ['id', 'nombre', 'tel', 'correo', 'city', 'cp', 'actions'];
  displayedColumnsExport: string [] = ['id', 'nombre', 'tel', 'correo', 'city', 'cp'];
  dataSource = this.ELEMENT_DATA;


  @ViewChild('table')tableElm!: ElementRef;


obtenerUsuarios() {
   this.userService.getUsers()
    .then((usuarios: Usuarios[]) => {

      this.dataSource = usuarios;

    })
    .catch(error => {
      console.error('Error al obtener usuarios:', error);
    });


}



eleminiarUsuario(id : number) {
  this.userService.delUser(id)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


  // this.obtenerUsuarioss().subscribe(() => {
  //   this.ELEMENT_DATA = this.ELEMENT_DATA.filter(producto => producto.id !== id);
  //   this.cdr.detectChanges(); // Forzar la detección de cambios
  // });


}




  exportToExcel() {                                                //.datasource.data
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource, { header: this.displayedColumnsExport });
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'tabla.xlsx');
  }

  exportToPDF() {
    const doc = new jsPDF();
    const columns = this.displayedColumnsExport;
    const rows = this.dataSource.map((element: Usuarios) =>
      columns.map((col: string) => (element as any)[col])
    );

    autoTable(doc, {
      head: [columns],
      body: rows,
    });

    doc.save('tabla.pdf');
  }
}
