// PacienteDto.ts
export default class PatientDto {
    private _ID: string; 
    private _documentoPac: string;
    private _tipoDoc: string;
    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _rol: string;
    private _fechaNac: Date;
    private _password: string;

    constructor(
        documentoPac: string,
        tipoDoc: string,
        nombre: string,
        apellido: string,
        email: string,
        password: string,
        fechaNac: Date,
        rol: string,
        Id?: string
    ) {
        this.ID = Id
        this.documentoPac = documentoPac;
        this.tipoDoc = tipoDoc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.fechaNac = fechaNac;
        this.rol = rol;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(ID: string) {
        this._ID = ID;
    }

    get documentoPac(): string {
        return this._documentoPac;
    }

    set documentoPac(documentoPac: string) {
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
