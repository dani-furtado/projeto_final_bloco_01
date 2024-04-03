import { Acessorios } from "./Acessorios";

export class Touca extends Acessorios {
    
    private _touca: string;

	constructor(id: number, nome: string, tipo: number, preco: number, touca: string) {
		super(id, nome, tipo, preco)
        this._touca = touca;
	}
	
	public get touca(): string {
		return this._touca;
	}

	public set touca(touca: string) {
		this._touca = touca;
	}

    public visualizar(): void {
        super.visualizar();
    }
	
}