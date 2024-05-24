// modelo de datos de soporte tecnico

export class SoporteTecnico {
    id: number;
    problema: string;
    descripcion: string;
    fecha_mensaje: string;
    correo: string;
    nombre_de_usuario: string;
    nombre: string;
    apellido: string;

    constructor(id: number, problema: string, descripcion: string, fecha_mensaje: string, correo: string, nombre_de_usuario: string, nombre: string, apellido: string) {
        this.id = id;
        this.problema = problema;
        this.descripcion = descripcion;
        this.fecha_mensaje = fecha_mensaje;
        this.correo = correo;
        this.nombre_de_usuario = nombre_de_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

