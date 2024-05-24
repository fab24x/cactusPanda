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

    constructor(
        correo: string,
        problema: string,
        descripcion: string,
        id?: number,
        fecha_mensaje?: string,
        nombre_de_usuario?: string,
        nombre?: string,
        apellido?: string
    ) {
        this.correo = correo;
        this.problema = problema;
        this.descripcion = descripcion;
        this.id = id || 0;
        this.fecha_mensaje = fecha_mensaje || '';
        this.nombre_de_usuario = nombre_de_usuario || '';
        this.nombre = nombre || '';
        this.apellido = apellido || '';
    }
}

