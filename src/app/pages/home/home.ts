import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

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
    },
    {
      titulo: 'Avatar',
      genero: 'Aventura',
      imagen: 'https://picsum.photos/400/600?random=4'
    },
    {
      titulo: 'Joker',
      genero: 'Drama',
      imagen: 'https://picsum.photos/400/600?random=5'
    },
    {
      titulo: 'Doctor Strange',
      genero: 'Fantasia',
      imagen: 'https://picsum.photos/400/600?random=6'
    },
    {
      titulo: 'Top Gun Maverick',
      genero: 'Acción',
      imagen: 'https://picsum.photos/400/600?random=7'
    },
    {
      titulo: 'Spider-Man',
      genero: 'Superhéroes',
      imagen: 'https://picsum.photos/400/600?random=8'
    },
    {
      titulo: 'John Wick',
      genero: 'Acción',
      imagen: 'https://picsum.photos/400/600?random=9'
    },
    {
      titulo: 'Matrix',
      genero: 'Ciencia Ficción',
      imagen: 'https://picsum.photos/400/600?random=10'
    },
    {
      titulo: 'Fast & Furious',
      genero: 'Velocidad',
      imagen: 'https://picsum.photos/400/600?random=11'
    },
    {
      titulo: 'Avengers Endgame',
      genero: 'Superhéroes',
      imagen: 'https://picsum.photos/400/600?random=12'
    }
  ];

}