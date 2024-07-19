export default class AdminUpdateDTO {
    private _documento: string;
    private _nombre: string;
    private _apellido: string;
    private _email: string;
  
    constructor(
      documento: string,
      nombre: string,
      apellido: string,
      email: string,
    ) {
      this._documento = documento;
      this._nombre = nombre;
      this._apellido = apellido;
      this._email = email;
    }
  
    // Getters
    get documento(): string {
      return this._documento;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    get apellido(): string {
      return this._apellido;
    }
  
    get email(): string {
      return this._email;
    }
  
    // Setters
    set documento(value: string) {
      this._documento = value;
    }
  
    set nombre(value: string) {
      this._nombre = value;
    }
  
    set apellido(value: string) {
      this._apellido = value;
    }
  
  
    set email(value: string) {
      this._email = value;
    }
  
   
  }
  