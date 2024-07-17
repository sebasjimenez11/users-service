// PacienteDto.ts
export default class PatientDto {
    private _documentoPac: number;
    private _tipoDoc: string;
    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _rol: string;
    private _fechaNac: Date;
    private _password: string;

    constructor(
        documentoPac: number,
        tipoDoc: string,
        nombre: string,
        apellido: string,
        email: string,
        password: string,
        fechaNac: Date,
        rol: string
    ) {
        this._documentoPac = documentoPac;
        this._tipoDoc = tipoDoc;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._password = password;
        this._fechaNac = fechaNac;
        this._rol = rol;
    }

    get documentoPac(): number {
        return this._documentoPac;
    }

    set documentoPac(documentoPac: number) {
        this._documentoPac = documentoPac;
    }

    get tipoDoc(): string {
        return this._tipoDoc;
    }

    set tipoDoc(tipoDoc: string) {
        this._tipoDoc = tipoDoc;
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

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get rol(): string {
        return this._rol;
    }

    set rol(rol: string) {
        this._rol = rol;
    }

    get fechaNac(): Date {
        return this._fechaNac;
    }

    set fechaNac(fechaNac: Date) {
        this._fechaNac = fechaNac;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

}
