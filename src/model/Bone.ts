import { Acessorios } from "./Acessorios";

export class Bone extends Acessorios {
    
    private _bone: string;

	constructor(id: number, nome: string, tipo: number, preco: number, bone: string) {
		super(id, nome, tipo, preco)
        this._bone = bone;
	}

	public get bone(): string {
		return this._bone;
	}

	public set bone(bone: string) {
		this._bone = bone;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Limite é: " + this._bone);
    }
	
	}