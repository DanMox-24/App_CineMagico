import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuController } from '@ionic/angular';

/**
 * Página "Acerca de"
 * 
 * Funcionalidades principales:
 * - Muestra información corporativa
 * - Integración con Google Maps
 * - Funciones de contacto (llamar, email)
 * - Control de menú lateral
 */
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {
  
  // Datos del equipo 
  equipo = [
    {
      nombre: 'Daniel Mateus',
      cargo: 'Administrador',
      experiencia: '10 años en la industria cinematográfica',
      imagen: 'assets/images/team-daniel.jpg'
    }
  ];

  // Listado de servicios ofrecidos por el cine
  servicios = [
    {
      icono: 'film',
      titulo: 'Tecnología de Vanguardia',
      descripcion: 'Proyectores 4K y sistema de sonido Dolby Atmos'
    },
    {
      icono: 'restaurant',
      titulo: 'Gastronomía Premium',
      descripcion: 'Snacks gourmet y bebidas artesanales'
    },
    {
      icono: 'car',
      titulo: 'Parqueadero Gratuito',
      descripcion: 'Estacionamiento seguro sin costo adicional'
    },
    {
      icono: 'accessibility',
      titulo: 'Accesibilidad Total',
      descripcion: 'Instalaciones adaptadas para todos'
    }
  ];

  // Coordenadas para el mapa 
  latitud = 4.6097;
  longitud = -74.0817;
  
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  /**
   * Abre el menú lateral deslizable
   */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * Abre la ubicación en Google Maps
   * Usa las coordenadas almacenadas en las propiedades del componente
   */
  abrirMapa() {
    const url = `https://www.google.com/maps/search/?api=1&query=${this.latitud},${this.longitud}`;
    window.open(url, '_system'); // '_system' abre la aplicación nativa si está disponible
  }

  /**
   * Inicia una llamada telefónica al número del cine
   */
  llamarCine() {
    window.open('tel:+571234567', '_system');
  }

  /**
   * Abre el cliente de correo predeterminado para contactar al cine
   */
  enviarEmail() {
    window.open('mailto:info@cinemagico.com', '_system');
  }
}