import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  modalAbierto = false;

  nuevaPelicula = {
    titulo: '',
    genero: '',
    imagen: ''
  };

  peliculas = [
    {
      titulo: 'Interstellar',
      genero: 'Ciencia Ficción',
      imagen: 'https://picsum.photos/400/600?random=1'
    },
    {
      titulo: 'Batman Begins',
      genero: 'Acción',
      imagen: 'https://picsum.photos/400/600?random=2'
    },
    {
      titulo: 'Inception',
      genero: 'Suspenso',
      imagen: 'https://picsum.photos/400/600?random=3'
    }
  ];

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  agregarPelicula() {

    if (
      this.nuevaPelicula.titulo.trim() &&
      this.nuevaPelicula.genero.trim() &&
      this.nuevaPelicula.imagen.trim()
    ) {

      this.peliculas.unshift({
        ...this.nuevaPelicula
      });

      this.nuevaPelicula = {
        titulo: '',
        genero: '',
        imagen: ''
      };

      this.cerrarModal();
    }
  }

  eliminarPelicula(index: number) {
    this.peliculas.splice(index, 1);
  }
}

