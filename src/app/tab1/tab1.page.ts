import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

/**
 * Componente: Tab1Page
 * Descripción: Página principal de la cartelera de películas.
 * Muestra las películas disponibles, sus horarios, precios y permite ver trailers.
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  /**
   * Lista de películas en cartelera.
   * Cada objeto contiene información como título, género, duración, imagen, precios y horarios.
   */
  peliculas = [
    {
      titulo: 'Los 4 Fantásticos: Primeros Pasos',
      genero: 'Acción, Aventura, Ciencia Ficción',
      duracion: '115 min',
      imagen: 'assets/images/4fanta.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=waf9snfaUFw',
      precio2D: 15000,
      precio3D: 20000,
      precio4D: 30000,
      horarios: ['14:30', '18:00', '21:30'],
      fecha: '2025-08-11'
    },
    {
      titulo: 'Amores Materialistas',
      genero: 'Comedia, Romance',
      duracion: '116 min',
      imagen: 'assets/images/amor-mat.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=jJyMcGr6t18',
      precio2D: 14000,
      horarios: ['15:00', '17:45', '20:30'],
      fecha: '2025-08-11'
    },
    {
      titulo: 'La hora de la desaparición',
      genero: 'Misterio, Horror',
      duracion: '129 min',
      imagen: 'assets/images/lahora.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=J3R3DyQZ1e8',
      precio2D: 16000,
      horarios: ['16:00', '19:15', '22:00'],
      fecha: '2025-08-11'
    },
    {
      titulo: 'Superman',
      genero: 'Acción, Aventura, Ciencia Ficción, Fantasía',
      duracion: '129 min',
      imagen: 'assets/images/superman.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=0X_kBulSMjQ',
      precio2D: 14000,
      precio3D: 19000,
      precio4D: 30000,
      horarios: ['15:00', '17:45', '20:30'],
      fecha: '2025-08-11'
    },
    {
      titulo: 'Cómo Entrenar a Tu Dragón',
      genero: 'Aventura, Fantasía',
      duracion: '125 min',
      imagen: 'assets/images/entrenar.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=liGB1ssYn38',
      precio2D: 14000,
      precio3D: 19000,
      horarios: ['15:00', '17:45', '20:30'],
      fecha: '2025-08-11'
    },
    {
      titulo: 'Otro Viernes de Locos',
      genero: 'Comedia, Fantasía, Familiar',
      duracion: '111 min',
      imagen: 'assets/images/delocos.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=97ExuMBIE8Y',
      precio2D: 14000,
      horarios: ['13:30', '15:00', '17:30'],
      fecha: '2025-08-11'
    },
  ];

  /**
   * Constructor que inyecta el controlador del menú lateral.
   * @param menu - Controlador del menú de Ionic
   */
  constructor(private menu: MenuController) {}

  /**
   * Abre el menú lateral identificado como 'first'.
   */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * Maneja la selección de un horario para una película.
   * @param pelicula - Objeto de la película seleccionada
   * @param horario - Horario elegido por el usuario
   */
  seleccionarHorario(pelicula: any, horario: string) {
    console.log(`Seleccionada: ${pelicula.titulo} - ${horario}`);
  }
}
