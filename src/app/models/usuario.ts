export class Usuario {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  birthdate: string;
  creation_date: string;

  constructor(
    id: number = 0,
    username: string = '',
    email: string = '',
    name: string = '',
    surname: string = '',
    birthdate: string = '',
    creation_date: string = ''
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.creation_date = creation_date;
  }
}
