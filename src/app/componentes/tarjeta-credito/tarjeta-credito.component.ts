import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {

  listarTarjetas: any[] = ['Juan Perz', 0, '13/05' ]
  columnasBases: string[] = ['nombre', 'numero', 'fechaVencimiento'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  form: FormGroup;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      numero: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaVencimiento: [''],
    })
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
  }

  agregarTarjeta() {
    console.log(this.form)

    const tarjeta: any = {
      nombre: this.form.get('nombre')?.value,
      numero: this.form.get('numero')?.value,
      fechaVencimiento: this.form.get('fechaVencimiento')?.value,
    }
    this.listarTarjetas.push();
    this.form.reset();
  }
}
