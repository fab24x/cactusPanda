export class SoporteTecnicoPost {
    correo: string;
    problema: string;
    descripcion: string;
  
    constructor(correo: string, problema: string, descripcion: string) {
      this.correo = correo;
      this.problema = problema;
      this.descripcion = descripcion;
    }
    
  }