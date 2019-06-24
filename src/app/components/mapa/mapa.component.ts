import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007; 
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {  
   if(localStorage.getItem('marcadores')){
    this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
   }
  }

  ngOnInit() {
  }

  agregarMarcador(evento:any){
    const coord: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coord.lat, coord.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrar(i:number){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Eliminado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador( marcardor: Marcador ){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcardor.titulo, desc: marcardor.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if(!result){
        return;
      }

      marcardor.titulo = result.titulo;
      marcardor.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open('Marcardo actualizado', 'Cerrar', { duration :3000 });
    });
  }

}
