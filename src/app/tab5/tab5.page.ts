import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuController, AlertController, ToastController } from '@ionic/angular';

/**
 * Página de "Mis Reservas"
 * 
 * Funcionalidades principales:
 * - Visualización de reservas activas e históricas
 * - Gestión de reservas (cancelación, descarga de tickets)
 * - Compartir tickets
 * - Navegación a nueva reserva
 */
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab5Page implements OnInit {
  
  // Lista de reservas confirmadas y usadas
  misReservas = [
    {
      id: 'R001',
      pelicula: 'Los 4 Fantásticos: Primeros Pasos',
      fecha: '2025-08-15',
      hora: '19:30',
      sala: 'Sala Premium 1',
      asientos: ['F5', 'F6'], // Asientos reservados
      formato: '3D',
      precio: 42000, // Precio en COP
      estado: 'confirmada',
      codigoQR: 'assets/images/cinemagico_qr.png' // Ruta al código QR
    },
    {
      id: 'R002',
      pelicula: 'La hora de la desaparición',
      fecha: '2025-08-12',
      hora: '21:00',
      sala: 'Sala VIP 2',
      asientos: ['C3', 'C4'],
      formato: '2D',
      precio: 32000,
      estado: 'usada',
      codigoQR: 'assets/images/codigo_qr_2.png'
    }
  ];

  // Lista de reservas pendientes de pago
  proximasReservas = [
    {
      id: 'R003',
      pelicula: 'Otro Viernes de Locos',
      fecha: '2025-08-20',
      hora: '16:00',
      sala: 'Sala 3',
      asientos: ['H7', 'H8', 'H9'],
      formato: '2D',
      precio: 45000,
      estado: 'pendiente'
    }
  ];

  constructor(
    private menu: MenuController,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  /**
   * Abre el menú lateral deslizable
   */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * Muestra diálogo de confirmación para cancelar una reserva
   * @param reserva - Objeto con los datos de la reserva a cancelar
   */
  async cancelarReserva(reserva: any) {
    const alert = await this.alertController.create({
      header: 'Cancelar Reserva',
      message: `¿Estás seguro de cancelar la reserva para "${reserva.pelicula}"?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Sí, cancelar',
          handler: async () => {
            // Elimina la reserva del array
            const index = this.misReservas.findIndex(r => r.id === reserva.id);
            if (index > -1) {
              this.misReservas.splice(index, 1);
            }

            // Muestra notificación de éxito
            const toast = await this.toastController.create({
              message: 'Reserva cancelada exitosamente',
              duration: 3000,
              color: 'success'
            });
            await toast.present();
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * Simula la descarga de un ticket (en implementación real generaría PDF)
   * @param reserva - Reserva para la cual descargar ticket
   */
  async descargarTicket(reserva: any) {
    const toast = await this.toastController.create({
      message: 'Descargando ticket...',
      duration: 2000,
      color: 'primary'
    });
    await toast.present();
    // En implementación real: generar PDF con datos de reserva
  }

  /**
   * Comparte los detalles de la reserva usando Web Share API
   * @param reserva - Reserva a compartir
   */
  async compartirTicket(reserva: any) {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi Ticket de CineMágico',
          text: `Voy a ver ${reserva.pelicula} el ${reserva.fecha} a las ${reserva.hora}`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      // Fallback para navegadores sin soporte
      const toast = await this.toastController.create({
        message: 'Función de compartir no disponible',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
    }
  }

  /**
   * Devuelve el color correspondiente al estado de la reserva
   * @param estado - Estado actual de la reserva
   * @returns Nombre del color Ionic
   */
  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'confirmada': return 'success';  // Verde
      case 'pendiente': return 'warning';  // Amarillo
      case 'cancelada': return 'danger';   // Rojo
      case 'usada': return 'medium';       // Gris
      default: return 'primary';           // Azul por defecto
    }
  }

  /**
   * Devuelve el texto legible para el estado de la reserva
   * @param estado - Estado actual de la reserva
   * @returns Texto descriptivo del estado
   */
  getEstadoTexto(estado: string): string {
    switch (estado) {
      case 'confirmada': return 'Confirmada';
      case 'pendiente': return 'Pendiente de Pago';
      case 'cancelada': return 'Cancelada';
      case 'usada': return 'Usada';
      default: return estado;
    }
  }

  /**
   * Formatea una fecha en formato ISO a texto legible
   * @param fecha - Fecha en formato YYYY-MM-DD
   * @returns Fecha formateada (ej: "viernes, 15 de agosto de 2025")
   */
  formatearFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    const opciones: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return fechaObj.toLocaleDateString('es-ES', opciones);
  }

  /**
   * Simula navegación a la pantalla de nueva reserva
   */
  async nuevaReserva() {
    const toast = await this.toastController.create({
      message: 'Redirigiendo a cartelera...',
      duration: 2000,
      color: 'primary'
    });
    await toast.present();
    // En implementación real: navegar al tab de cartelera
  }
}