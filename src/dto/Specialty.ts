// EspecialidadDto.ts
export default class SpecialtyDto {
    private _codigoEspc: number;
    private _nombre: string;
    private _descripcion?: string;

    constructor(codigoEspc: number, nombre: string, descripcion?: string) {
        this._codigoEspc = codigoEspc;
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    get codigoEspc(): number {
        return this._codigoEspc;
    }

    set codigoEspc(codigoEspc: number) {
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
