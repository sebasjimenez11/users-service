// DoctorDto.ts
export default class DoctorUpdateDto {
    private _tarjetaProf: string;
    private _documento: number;
    private _nombre: string;
    private _apellido: string;
    private _rol: string;
    private _email: string;
    private _valorCita: number;
    

    constructor(
        tarjetaProf: string,
        documento: number,
        nombre: string,
        apellido: string,
        email: string,
        valorCita: number,
    ) {
        this._tarjetaProf = tarjetaProf;
        this._documento = documento;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._valorCita = valorCita;
    }
    
    get tarjetaProf(): string {
        return this._tarjetaProf;
    }

    set tarjetaProf(tarjetaProf: string) {
        this._tarjetaProf = tarjetaProf;
    }

    get documento(): number {
        return this._documento;
    }

    set documento(documento: number) {
        this._documento = documento;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get rol(): string {
        return this._rol;
    }

    set rol(rol: string) {
        this._rol = rol;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }
   
    get valorCita():number{
        return this._valorCita;
    }

    set valorCita(valorCita:number){
        this.valorCita = valorCita;
    }
}
