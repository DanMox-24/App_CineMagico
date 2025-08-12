import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { IonDatetime } from "@ionic/angular/standalone";

/**
 * Página de autenticación (login/registro)
 * 
 * Características principales:
 * - Formularios reactivos con validación
 * - Toggle de visibilidad de contraseñas
 * - Selector de fecha de nacimiento
 * - Integración con menú lateral
 * - Simulación de procesos de autenticación
 */
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  // Formularios reactivos
  loginForm!: FormGroup;
  registroForm!: FormGroup;
  
  // Variables de estado
  segmentValue = 'login'; // Controla el segmento activo (login/registro)
  showPassword = false; // Controla visibilidad de contraseña
  showConfirmPassword = false; // Controla visibilidad de confirmación
  maxDate: string = new Date().toISOString(); // Fecha máxima para selector (hoy)

  constructor(
    private formBuilder: FormBuilder,
    private menu: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.inicializarFormularios();
  }

  /**
   * Inicializa los formularios reactivos con sus validaciones
   */
  inicializarFormularios() {
    // Formulario de Login
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required, 
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

    // Formulario de Registro
    this.registroForm = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$') // Solo letras y espacios
      ]],
      apellido: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')
      ]],
      email: ['', [
        Validators.required, 
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      telefono: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$') // Exactamente 10 dígitos
      ]],
      fechaNacimiento: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        // Requiere mayúscula, minúscula y número
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$')
      ]],
      confirmPassword: ['', Validators.required],
      terminos: [false, Validators.requiredTrue] // Debe estar marcado
    }, { 
      validators: this.passwordMatchValidator // Validador personalizado
    });
  }

  /**
   * Validador personalizado para verificar que las contraseñas coincidan
   * @param formGroup Formulario que contiene los campos de contraseña
   * @returns Objeto con error o null si coinciden
   */
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    
    // Limpiar errores si ahora coinciden
    if (confirmPassword?.errors?.['mismatch']) {
      delete confirmPassword.errors['mismatch'];
      if (Object.keys(confirmPassword.errors).length === 0) {
        confirmPassword.setErrors(null);
      }
    }
    
    return null;
  }

  // ========== MÉTODOS DE UI ==========

  /** Abre el menú lateral */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /** Alterna la visibilidad de la contraseña */
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  /** Alterna la visibilidad de la confirmación de contraseña */
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // ========== MANEJO DE FORMULARIOS ==========

  /**
   * Obtiene mensajes de error para campos del formulario
   * @param formGroup Formulario a validar
   * @param fieldName Nombre del campo
   * @returns Mensaje de error o string vacío si no hay errores
   */
  getErrorMessage(formGroup: FormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['email']) return 'Email no válido';
      if (field.errors['minlength']) return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['pattern']) {
        switch (fieldName) {
          case 'telefono': return 'Teléfono debe tener 10 dígitos';
          case 'nombre':
          case 'apellido': return 'Solo se permiten letras y espacios';
          case 'password': return 'Debe contener mayúscula, minúscula y número';
          default: return 'Formato inválido';
        }
      }
      if (field.errors['mismatch']) return 'Las contraseñas no coinciden';
    }
    return '';
  }

  /**
   * Maneja el envío del formulario de login
   */
  async onLogin() {
    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
        duration: 2000
      });
      await loading.present();

      // Simulación de login (en una app real, aquí iría la llamada HTTP)
      setTimeout(async () => {
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: '¡Bienvenido a CineMágico!',
          duration: 3000,
          position: 'top',
          color: 'success'
        });
        await toast.present();
      }, 2000);
    } else {
      this.mostrarErrores(this.loginForm);
    }
  }

  /**
   * Maneja el envío del formulario de registro
   */
  async onRegistro() {
    if (this.registroForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Creando cuenta...',
        duration: 2000
      });
      await loading.present();

      // Simulación de registro (en una app real, aquí iría la llamada HTTP)
      setTimeout(async () => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: '¡Registro Exitoso!',
          message: 'Tu cuenta ha sido creada. Te hemos enviado un email de confirmación.',
          buttons: ['OK']
        });
        await alert.present();
        this.segmentValue = 'login'; // Cambia a pestaña de login
        this.registroForm.reset(); // Limpia el formulario
      }, 2000);
    } else {
      this.mostrarErrores(this.registroForm);
    }
  }

  /**
   * Muestra alerta con todos los errores del formulario
   * @param form Formulario a validar
   */
  async mostrarErrores(form: FormGroup) {
    const errors: string[] = [];
    Object.keys(form.controls).forEach(key => {
      const error = this.getErrorMessage(form, key);
      if (error) errors.push(`• ${error}`);
    });

    if (errors.length > 0) {
      const alert = await this.alertController.create({
        header: 'Errores en el formulario',
        message: errors.join('<br>'),
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  // ========== MANEJO DE EVENTOS ==========

  /**
   * Maneja el cambio en el selector de fecha de nacimiento
   * @param event Evento del ion-datetime
   */
  onFechaChange(event: any) {
    const iso = event?.detail?.value;
    if (iso) {
      this.registroForm.get('fechaNacimiento')?.setValue(iso);
      this.registroForm.get('fechaNacimiento')?.markAsTouched();
    }
  }

  /**
   * Muestra diálogo para recuperación de contraseña
   */
  async recuperarPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Ingresa tu email para recuperar tu contraseña',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'tu@email.com'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: async (data) => {
            if (data.email) {
              const toast = await this.toastController.create({
                message: 'Instrucciones enviadas a tu email',
                duration: 3000,
                color: 'success'
              });
              await toast.present();
            }
          }
        }
      ]
    });
    await alert.present();
  }
}