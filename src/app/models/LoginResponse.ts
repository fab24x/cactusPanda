export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    nombre_de_usuario: string;
    correo: string;
    fecha_nacimiento: string;
    nombre: string;
    apellido: string;
    id: number;
  };
}
