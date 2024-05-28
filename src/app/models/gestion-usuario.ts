import { Timestamp } from "rxjs";

export class GestionUsuario {
    id: number;
    nombre_de_usuario: string;
    nombre_mister: string;
    correo: string;
    pass: string;
    pass_mister: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    fecha_creacion: string;
  
    constructor(
        id: number = 0,
        nombre_de_usuario: string = '',
        nombre_mister: string = '',
        correo: string = '',
        pass: string = '',
        pass_mister: string = '',
        nombre: string = '',
        apellido: string = '',
        fecha_nacimiento: Date = new Date(),
        fecha_creacion: string = ''
    ) {
        this.id = id;
        this.nombre_de_usuario = nombre_de_usuario;
        this.nombre_mister = nombre_mister;
        this.correo = correo;
        this.pass = pass;
        this.pass_mister = pass_mister;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.fecha_creacion = fecha_creacion;
    }
  }  