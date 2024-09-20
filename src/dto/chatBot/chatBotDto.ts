import chatMessageInterface from '../../config/common/interfaces/chatMessageInterface';

export default class chatDto {
    private _history: chatMessageInterface[];
    private _prompt: string;

    constructor() {
        this.history = this.history;
        this.prompt = this.prompt;
    }

    get history(): chatMessageInterface[] {
        return this._history;
    }
    get prompt(): string {
        return this._prompt;
    }

    set history(value: chatMessageInterface[]) {
        this._history = value;
    }
    set prompt(value: string) {
        this._prompt = value;
    }
    
}