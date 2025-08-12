import { Component } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

/**
 * Componente: Tab2Page
 * Descripción: Página de Snacks & Bebidas.
 * Permite visualizar productos, agregarlos al carrito, calcular el total y gestionar el pedido.
 */
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // Carrito de compras
  carrito: any[] = [];

  // Total acumulado del carrito
  total: number = 0;

  // Lista de combos especiales
  combos = [
    {
      id: 1,
      nombre: 'Combo Familiar',
      descripcion: 'Crispetas grandes + 2 gaseosas medianas',
      precio: 25000,
      imagen: 'assets/images/combo-familiar.jpg'
    },
    {
      id: 2,
      nombre: 'Combo Pareja',
      descripcion: 'Crispetas medianas + 2 gaseosas pequeñas',
      precio: 18000,
      imagen: 'assets/images/combo-pareja.jpg'
    },
    {
      id: 3,
      nombre: 'Combo Individual',
      descripcion: 'Crispetas pequeñas + gaseosa pequeña',
      precio: 12000,
      imagen: 'assets/images/combo-individual.jpg'
    }
  ];

  // Lista de snacks individuales
  snacks = [
    {
      id: 4,
      nombre: 'Crispetas Grandes',
      descripcion: 'Crispetas con mantequilla',
      precio: 8000,
      imagen: 'assets/images/popcorn-large.jpg'
    },
    {
      id: 5,
      nombre: 'Nachos con Queso',
      descripcion: 'Nachos crujientes con salsa de queso',
      precio: 9500,
      imagen: 'assets/images/nachos.jpg'
    },
    {
      id: 6,
      nombre: 'Hot Dog',
      descripcion: 'Salchicha con salsas al gusto',
      precio: 7000,
      imagen: 'assets/images/hotdog.jpg'
    }
  ];

  // Lista de bebidas disponibles
  bebidas = [
    {
      id: 7,
      nombre: 'Gaseosa Grande',
      descripcion: 'Coca-Cola, Pepsi, Sprite',
      precio: 5500,
      imagen: 'assets/images/soda-large.jpg'
    },
    {
      id: 8,
      nombre: 'Agua',
      descripcion: 'Agua natural 500ml',
      precio: 3000,
      imagen: 'assets/images/water.jpg'
    },
    {
      id: 9,
      nombre: 'Jugo Natural',
      descripcion: 'Naranja, mango o lulo',
      precio: 4500,
      imagen: 'assets/images/juice.jpg'
    }
  ];

  /**
   * Constructor que inyecta el controlador del menú y el controlador de toasts.
   * @param menu - Controlador del menú lateral
   * @param toastController - Controlador para mostrar mensajes emergentes
   */
  constructor(
    private menu: MenuController, 
    private toastController: ToastController
  ) {}

  /**
   * Abre el menú lateral identificado como 'first'.
   */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * Agrega un ítem al carrito. Si ya existe, incrementa la cantidad.
   * Muestra un toast de confirmación.
   * @param item - Producto seleccionado (combo, snack o bebida)
   */
  async agregarAlCarrito(item: any) {
    const itemExistente = this.carrito.find(c => c.id === item.id);
    
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.carrito.push({ ...item, cantidad: 1 });
    }
    
    this.calcularTotal();
    
    const toast = await this.toastController.create({
      message: `${item.nombre} agregado al carrito`,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }

  /**
   * Calcula el total del carrito sumando precio * cantidad de cada ítem.
   */
  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  /**
   * Remueve un ítem del carrito. Si hay más de uno, reduce la cantidad.
   * Si solo hay uno, lo elimina completamente.
   * @param item - Producto a remover
   */
  removerDelCarrito(item: any) {
    const index = this.carrito.findIndex(c => c.id === item.id);
    if (index > -1) {
      if (this.carrito[index].cantidad > 1) {
        this.carrito[index].cantidad--;
      } else {
        this.carrito.splice(index, 1);
      }
      this.calcularTotal();
    }
  }

  /**
   * Vacía completamente el carrito y reinicia el total.
   */
  vaciarCarrito() {
    this.carrito = [];
    this.total = 0;
  }
}
