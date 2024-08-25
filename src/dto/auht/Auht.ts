export default class AuhtDto {
    private _document ?: string;
    private _email ?: string;
    private _password : string;
    private _rol: string;

    constructor(
        password: string,
        rol: string,
        document?: string,
        email?: string
    ){
        this.document = document;
        this.rol = rol
        this.email = email;
        this.password = password;
    }

    get document(): string{
        return this._document;
    }

    set document(rol:string){
        this._document = rol;
    }

    get rol(): string{
        return this._rol;
    }

    set rol(rol:string){
        this._rol = rol;
    }

    get email():string{
        return this._email;
    }

    set email(email:string){
        this._email = email;
    }

    get password():string{
        return this._password;
    }

    set password(password:string){
        this._password = password;
    }
}