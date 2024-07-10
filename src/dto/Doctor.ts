// DoctorDto.ts
export default class DoctorDto {
    private _tarjetaProf: string;
    private _documento: number;
    private _nombre: string;
    private _apellido: string;
    private _rol: string;
    private _email: string;
    private _estado?: string;
    private _disponibilidad?: string;
    private _foto: Blob;
    private _password: string;
    private _codigoEspc: number;

    constructor(
        tarjetaProf: string,
        documento: number,
        nombre: string,
        apellido: string,
        rol: string,
        email: string,
        foto: Blob,
        password: string,
        codigoEspc: number,
        estado?: string,
        disponibilidad?: string,
    ) {
        this._tarjetaProf = tarjetaProf;
        this._documento = documento;
        this._nombre = nombre;
        this._apellido = apellido;
        this._rol = rol;
        this._email = email;
        this._foto = foto;
        this._password = password;
        this._codigoEspc = codigoEspc;
        this._estado = estado;
        this._disponibilidad = disponibilidad;
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

    get estado(): string | undefined {
        return this._estado;
    }

    set estado(estado: string | undefined) {
        this._estado = estado;
    }

    get disponibilidad(): string | undefined {
        return this._disponibilidad;
    }

    set disponibilidad(disponibilidad: string | undefined) {
        this._disponibilidad = disponibilidad;
    }

    get foto(): Blob {
        return this._foto;
    }

    set foto(foto: Blob) {
        this._foto = foto;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get codigoEspc(): number {
        return this._codigoEspc;
    }

    set codigoEspc(codigoEspc: number) {
        this._codigoEspc = codigoEspc;
    }
}
