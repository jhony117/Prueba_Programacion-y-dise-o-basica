import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

//importar a exel
import * as XLSX from 'xlsx';

//importar a PDF
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
 interface Usuarios {
  id : number ;
  nombre: string;
  tel: number;
  correo: string ;
  city : string ;
  cp : number ;
}

const ELEMENT_DATA: Usuarios[] = [
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

@Component({
  selector: 'app-user-tables',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './user-tables.component.html',
  styleUrl: './user-tables.component.css'
})
export class UserTablesComponent {
  displayedColumns: string[] =  ['id', 'nombre', 'tel', 'correo', 'city', 'cp'];
  dataSource = ELEMENT_DATA;
  
  exportToExcel() {                                                //.datasource.data
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource, { header: this.displayedColumns });
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'tabla.xlsx');
  }

  exportToPDF() {
    const doc = new jsPDF();
    const columns = this.displayedColumns;
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
