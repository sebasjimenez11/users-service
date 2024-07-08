export default class AuhtDto {
    private _document ?: number;
    private _email ?: string;
    private _password : string;

    constructor(
        password: string,
        document?: number,
        email?: string
    ){
        this._document = document;
        this._email = email;
        this._password = password;
    }

    get document(): number{
        return this._document;
    }

    set document(document:number){
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