// PacienteDto.ts
export default class PatientDto {
    private _documentoPac: number;
    private _tipoDoc: string;
    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _telefono?: string;
    private _rol: string;
    private _direccion?: string;
    private _fechaNac: Date;
    private _estado?: string;
    private _password: string;
    private _fechaReg?: Date;

    constructor(
        documentoPac: number,
        tipoDoc: string,
        nombre: string,
        apellido: string,
        email: string,
        password: string,
        fechaNac: Date,
        rol: string,
        telefono?: string,
        direccion?: string,
        estado?: string,
        fechaReg?: Date
    ) {
        this._documentoPac = documentoPac;
        this._tipoDoc = tipoDoc;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._password = password;
        this._fechaNac = fechaNac;
        this._rol = rol;
        this._telefono = telefono;
        this._direccion = direccion;
        this._estado = estado;
        this._fechaReg = fechaReg;
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

    get telefono(): string | undefined {
        return this._telefono;
    }

    set telefono(telefono: string | undefined) {
        this._telefono = telefono;
    }

    get rol(): string {
        return this._rol;
    }

    set rol(rol: string) {
        this._rol = rol;
    }

    get direccion(): string | undefined {
        return this._direccion;
    }

    set direccion(direccion: string | undefined) {
        this._direccion = direccion;
    }

    get fechaNac(): Date {
        return this._fechaNac;
    }

    set fechaNac(fechaNac: Date) {
        this._fechaNac = fechaNac;
    }

    get estado(): string | undefined {
        return this._estado;
    }

    set estado(estado: string | undefined) {
        this._estado = estado;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get fechaReg(): Date | undefined {
        return this._fechaReg;
    }

    set fechaReg(fechaReg: Date | undefined) {
        this._fechaReg = fechaReg;
    }
}
