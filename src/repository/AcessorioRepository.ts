import { Acessorios } from "../model/Acessorios";

export interface AcessoriosRepository {

    cadastrar(acessorio: Acessorios): void;
    listarTodas(): void;
    listarPorId(id: number): void;
    atualizar(acessorio: Acessorios): void;
    deletar(id: number): void;
    
}