export default class AuhtDto {
    private _document ?: string;
    private _email ?: string;
    private _password : string;

    constructor(
        password: string,
        document?: string,
        email?: string
    ){
        this._document = document;
        this._email = email;
        this._password = password;
    }

    get document(): string{
        return this._document;
    }

    set document(document:string){
        this._document = document;
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