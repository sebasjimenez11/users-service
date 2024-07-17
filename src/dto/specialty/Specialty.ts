// EspecialidadDto.ts
export default class SpecialtyDto {
    private _codigoEspc: string;
    private _nombre: string;
    private _descripcion?: string;

    constructor(codigoEspc: string, nombre: string, descripcion?: string) {
        this._codigoEspc = codigoEspc;
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    get codigoEspc(): string {
        return this._codigoEspc;
    }

    set codigoEspc(codigoEspc: string) {
        this._codigoEspc = codigoEspc;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get descripcion(): string | undefined {
        return this._descripcion;
    }

    set descripcion(descripcion: string | undefined) {
        this._descripcion = descripcion;
    }
}
