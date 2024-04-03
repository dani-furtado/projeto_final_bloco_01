import { Acessorios } from "../model/Acessorios";
import { AcessoriosRepository } from "../repository/AcessorioRepository";

export class AcessorioController implements AcessoriosRepository {
    
    private listaAcessorios: Array<Acessorios> = new Array<Acessorios>();

    public id: number = 0;

    cadastrar(acessorio: Acessorios): void {
        this.listaAcessorios.push(acessorio);
        console.log("O acessório foi adicionado com sucesso!")
    }

    listarTodas(): void {
        for (let acessorio of this.listaAcessorios){
            acessorio.visualizar();
        }
    }

    listarPorId(id: number): void {
        let buscarAcessorio = this.buscarNoArray(id);
        if (buscarAcessorio != null) {
            buscarAcessorio.visualizar();
        } else 
            console.log("O acessório não foi encontrada.")
    }

    atualizar(acessorio: Acessorios): void {
        let buscarAcessorio = this.buscarNoArray(acessorio.id) 
        if (buscarAcessorio != null) {
            this.listaAcessorios[this.listaAcessorios.indexOf(buscarAcessorio)] = acessorio;
            console.log("O acessório " + acessorio.id + "foi atualizado com sucesso!");
        } else 
            console.log("O acessório " + acessorio.id + " não foi encontrado.");
    }

    deletar(id: number): void {
        let buscarAcessorio = this.buscarNoArray(id);
        if (buscarAcessorio != null) {
            this.listaAcessorios.splice(this.listaAcessorios.indexOf(buscarAcessorio), 1);
            console.log("O acessório foi apagado com sucesso!")
        } else
            console.log("O acessório não foi encontrado!");
    }

    public gerarId(): number{
        return ++ this.id
    }

    public buscarNoArray(id: number): Acessorios | null {
        for (let acessorio of this.listaAcessorios) {
            if (acessorio.id === id)
                return acessorio;
        }
        return null;
    }
}