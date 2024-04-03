import { Acessorios } from "./Acessorios";

export class Touca extends Acessorios {
    
    private _touca: string;

	constructor(id: number, nome: string, tipo: number, preco: number, bone: string, touca: string) {
		super(id, nome, tipo, preco)
        this._touca = touca;
	}
	
	public get touca(): string {
		return this._touca;
	}

	public set touca(value: string) {
		this._touca = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Limite é: " + this._touca);
    }
	
}